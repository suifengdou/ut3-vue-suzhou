<template>
  <div class="phototypeexecuteprojectstatement-manage-container">
    <div class="tableTitle">
      <el-row :gutter="20">
        <el-col :span="6" class="titleBar">
          <div class="grid-content bg-purple">
            <div id="operationBoard">
              <el-tooltip class="item" effect="dark" content="点击展开操作列表，可执行对应操作" placement="top-start">
                <el-dropdown split-button type="primary" placement="bottom-end" trigger="click">
                  选中所有的{{ selectNum }}项
                  <el-dropdown-menu slot="dropdown" trigger="click">
                    <el-dropdown-item><el-button type="success" icon="el-icon-check" size="mini" round @click="handleSetTag">标记处理</el-button></el-dropdown-item>
                    <el-dropdown-item><el-button type="success" icon="el-icon-check" size="mini" round @click="handleResetTag">标记重置</el-button></el-dropdown-item>
                    <el-dropdown-item><el-button type="success" icon="el-icon-check" size="mini" round @click="handleFix">修复组项</el-button></el-dropdown-item>
                    <el-dropdown-item><el-button type="danger" icon="el-icon-close" size="mini" round @click="handleReject">驳回项目</el-button></el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="点击选中所有筛选出的订单" placement="top-start">
                <el-button @click="checkAllOption">全选{{ totalNum }}项</el-button>
              </el-tooltip>
            </div>
          </div>
        </el-col>
        <el-col :span="4" class="titleBar">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="快捷搜索" placement="top-start">
              <el-input v-model="params.name__name" class="grid-content bg-purple" placeholder="请输入整机版本名" @keyup.enter.native="fetchData">
                <el-button slot="append" icon="el-icon-search" @click="fetchData" />
              </el-input>
            </el-tooltip>
          </div>

        </el-col>
        <el-col :span="4" class="titleBar">
          <div class="grid-content bg-purple">
            <!-- <el-tooltip class="item" effect="dark" content="点击弹出导入界面" placement="top-start">
              <el-button type="success" @click="importExcel">导入</el-button>
            </el-tooltip> -->
            <el-tooltip class="item" effect="dark" content="点击弹出导出界面" placement="top-start">
              <el-button type="success" @click="exportExcel">导出</el-button>
            </el-tooltip>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="21" class="titleBar">
          <div class="grid-content bg-purple">
            <el-collapse @change="fetchData">
              <el-collapse-item>
                <template slot="title">
                  <el-button type="warning" icon="el-icon-s-unfold" circle />
                  <el-tooltip class="item" effect="dark" content="点击一次展开，再点击一次筛选" placement="bottom">
                    <el-button type="primary">多重筛选</el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="点击清空筛选内容，再点击一次刷新页面" placement="bottom">
                    <el-button type="info" @click="resetParams">重置</el-button>
                  </el-tooltip>
                </template>
                <div class="block">
                  <el-form ref="filterForm" :model="params" label-width="80px">
                    <el-row :gutter="20">
                      <el-col :span="6"><el-form-item label="版本编码" prop="name">
                        <el-input v-model="params.name__code" type="text" />
                      </el-form-item></el-col>
                      <el-col :span="3"><el-form-item label="版本序号" prop="name">
                        <el-input v-model="params.name__number_min" placeholder="最小值" type="text" />
                      </el-form-item></el-col>
                      <el-col :span="2">
                        <el-input v-model="params.name__number_max" placeholder="最大值" type="text" />
                      </el-col>
                      <el-col :span="1" />
                      <el-col :span="6" />
                      <el-col :span="6" />
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="6"><el-form-item label="类型" prop="category">
                        <el-select v-model="params.category" clearable placeholder="请选择类型">
                          <el-option
                            v-for="item in optionsCategory"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </el-form-item></el-col>
                      <el-col :span="6"><el-form-item label="产品线" prop="product_line">
                        <template>
                          <el-select
                            v-model="params.product_line"
                            filterable
                            default-first-option
                            remote
                            clearable
                            reserve-keyword
                            placeholder="产品线"
                            :remote-method="remoteMethodProductLine"
                          >
                            <el-option
                              v-for="item in optionsProductLine"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            />
                          </el-select>
                        </template>
                      </el-form-item></el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="6"><el-form-item label="级别" prop="level">
                        <el-select v-model="params.level" clearable placeholder="请选择级别">
                          <el-option
                            v-for="item in optionsLevel"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </el-form-item></el-col>
                      <el-col :span="6"><el-form-item label="国别" prop="name">
                        <el-input v-model="params.name__units__nationality__name" type="text" />
                      </el-form-item></el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="3"><el-form-item label="整机排序" prop="name">
                        <el-input v-model="params.name__units__unit_number_min" placeholder="最小值" type="text" />
                      </el-form-item></el-col>
                      <el-col :span="2">
                        <el-input v-model="params.name__units__unit_number_max" placeholder="最大值" type="text" />
                      </el-col>
                      <el-col :span="1" />
                      <el-col :span="6"><el-form-item label="创建者" prop="creator">
                        <el-input v-model="params.creator__username" type="text" />
                      </el-form-item></el-col>
                      <el-col :span="6" />
                      <el-col :span="6" />
                    </el-row>

                    <el-row :gutter="20">
                      <el-col :span="12"><el-form-item label="创建时间">
                        <div class="block">
                          <el-date-picker
                            v-model="params.create_time"
                            type="datetimerange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                          />
                        </div>
                      </el-form-item></el-col>
                      <el-col :span="6" />
                      <el-col :span="6" />
                    </el-row>
                  </el-form>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>

        </el-col>
      </el-row>
    </div>

    <div class="table-list">
      <el-table
        id="tableBody"
        ref="tableList"
        v-loading="tableLoading"
        :data="DataList"
        border
        style="width: 100%"
        :row-style="rowStyle"
        @sort-change="onSortChange"
        @selection-change="handleSelectionChange"
        @cell-dblclick="handelDoubleClick"
      >
        <el-table-column ref="checkall" type="selection" label="选项" />
        <el-table-column
          label="ID"
        >
          <template slot-scope="scope">
            <el-tag type="success"><span>{{ scope.row.id }}</span></el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="结算单名称"
          prop="name"
          width="180px"
          sortable="custom"
          :sort-orders="['ascending','descending']"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="结算单编码"
          prop="code"
          width="150px"
          sortable="custom"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.code }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="状态"
          prop="order_status"
          sortable="custom"
          :sort-orders="['ascending','descending']"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.order_status.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="错误"
          prop="mistake_tag"
          sortable="custom"
          :sort-orders="['ascending','descending']"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.mistake_tag.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="供应商"
          prop="supplier"
          sortable="custom"
          :sort-orders="['ascending','descending']"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.supplier.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="是否制板"
          prop="is_making"
        >
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.is_making"
              active-color="#13ce66"
              inactive-color="#ff4949"
              disabled
            />
          </template>

        </el-table-column>
        <el-table-column
          label="合计金额"
          prop="amount"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.amount }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="调整金额"
          prop="adjust_amount"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.adjust_amount }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="结算金额"
          prop="settle_amount"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.settle_amount }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="未结算金额"
          prop="remaining"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.remaining }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="备注"
          prop="memo"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.memo }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="日志查看"
        >
          <template slot-scope="scope">
            <el-button type="danger" size="mini" @click="logView(scope.row)">查看</el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="创建者"
          prop="creator"
          sortable="custom"
          :sort-orders="['ascending','descending']"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.creator.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="创建时间"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.created_time }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="更新时间"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.updated_time }}</span>
          </template>
        </el-table-column>

      </el-table>
    </div>
    <!--修改信息模态窗-->
    <el-dialog
      title="管理组项项目"
      width="80%"
      :row-style="rowStyle"
      :visible.sync="dialogVisibleEdit"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <template>
        <div class="handleFormEdit">
          <el-form
            ref="handleFormEdit"
            label-width="80px"
            size="mini"
            :model="formEdit"
            :rules="rules"
          >
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>项目信息</span>
              </div>
              <el-row :gutter="20">
                <el-col :span="8"><el-form-item label="产品线" prop="receiver">
                  <span>{{ formEdit.product_line }}</span>
                </el-form-item></el-col>
                <el-col :span="8"><el-form-item label="子项名" prop="mobile">
                  <span>{{ formEdit.subunits_version }}</span>
                </el-form-item></el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="8"><el-form-item label="项目类别" prop="address">
                  <span>{{ formEdit.category }}</span>
                </el-form-item></el-col>
                <el-col :span="8"><el-form-item label="子项类别" prop="m_sn">
                  <span>{{ formEdit.type }}</span>
                </el-form-item></el-col>
              </el-row>
            </el-card>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>组项项目信息</span>
              </div>
              <el-row :gutter="20">
                <el-col :span="2"><el-button
                  type="success"
                  icon="el-icon-delete"
                  size="mini"
                  @click="handleDeleteDetailsEdit"
                >删除</el-button></el-col>
                <el-col :span="10" />
                <el-col :span="4" />
                <el-col :span="4" />
              </el-row>
              <el-table
                ref="tableEdit"
                border
                :data="componentDetailsTable"
                :row-class-name="rowClassName"
                @selection-change="handleDetailSelectionChangeEdit"
              >
                <el-table-column type="selection" width="30" align="center" />
                <el-table-column label="序号" align="center" prop="xh" width="50">
                  <template slot-scope="scope">
                    <span>{{ componentDetailsTable[scope.row.xh-1].xh }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="ID" width="250" prop="id">
                  <template slot-scope="scope">
                    <span>{{ componentDetailsTable[scope.row.xh-1].id }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="ID" width="250" prop="name">
                  <template slot-scope="scope">
                    <span>{{ componentDetailsTable[scope.row.xh-1].name }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="备注" width="250" prop="memo">
                  <template slot-scope="scope">
                    <span>{{ componentDetailsTable[scope.row.xh-1].memo }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="创建时间" width="250" prop="created_time">
                  <template slot-scope="scope">
                    <span>{{ componentDetailsTable[scope.row.xh-1].created_time }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </el-card>
            <el-card class="box-card">
              <el-row :gutter="20">
                <el-col :span="8" :offset="16"><el-form-item size="large">
                  <div class="btn-warpper">
                    <el-button type="danger" @click="handleCancelEdit">取消</el-button>
                    <el-button type="primary" @click="handleSubmitEdit">立即保存</el-button>
                  </div>
                </el-form-item></el-col>
              </el-row>
            </el-card>
          </el-form>
        </div>
      </template>
    </el-dialog>
    <!--导入图片模态窗-->
    <el-dialog
      title="导入"
      :visible.sync="importVisible"
      width="33%"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <el-form ref="importForm" label-width="10%" :data="importFiles">
        <div>
          <h3>特别注意</h3>
          <p>针对不同的模块，需要严格按照模板要求进行，无法导入的情况，请联系系统管理员</p>
        </div>
        <hr>
        <el-form-item label="文件">
          <input ref="photofiles" type="file" multiple="multiple" @change="getFile($event)">
        </el-form-item>
        <hr>
        <el-row :gutter="30">
          <el-col :span="12" :offset="6">
            <el-form-item>
              <el-button type="primary" @click="importPhotoes">导入文件</el-button>
              <el-button type="error" @click="closeImport">取消</el-button>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>

    </el-dialog>
    <!--图片查看模态窗-->
    <el-dialog
      title="文档查看"
      :visible.sync="photoViewVisible"
      width="55%"
      border
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <div style="margin: auto">
        <el-table :data="fileDetails">
          <el-table-column
            label="文件名"
            prop="name"
            width="120px"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="文件类型"
            prop="suffix"
            width="120px"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.suffix }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="文件链接"
            prop="suffix"
            width="120px"
          >
            <template slot-scope="scope">
              <div v-if="scope.row.is_pic">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="scope.row.url"
                  :preview-src-list="scope.row.url_list">
                </el-image>
              </div>
              <div v-else>
                <el-link :href="scope.row.url" target="_blank">{{ scope.row.name }}</el-link>
              </div>

            </template>
          </el-table-column>
          <el-table-column
            label="创建者"
            prop="creator"
            width="120px"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.creator }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="创建时间"
            prop="created_time"
            width="120px"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.created_time }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="操作"
          >
            <template slot-scope="scope">
              <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>

        </el-table>
      </div>


    </el-dialog>

    <!--日志查看模态窗-->
    <el-dialog
      title="日志查看"
      :visible.sync="logViewVisible"
      width="50%"
      border
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <div style="margin: auto">
        <el-table :data="logDetails" border>
          <el-table-column
            label="操作人"
            prop="name"
            width="120px"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="操作内容"
            prop="content"
            width="520px"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.content }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="操作时间"
            prop="created_time"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.created_time }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>


    </el-dialog>
    <!--页脚-->
    <div class="tableFoots">
      <center>
        <el-pagination background layout="total, prev, pager, next, jumper" :total="totalNum" :page-size="pageSize" @current-change="handleCurrentChange" />
      </center>
    </div>
  </div>
</template>

<script>
import {
  getPhototypeStatement,
  exportPhototypeStatement,
  getLogPhototypeStatement,
} from '@/api/statement/phototypestatement/manage'
import { getProductLineList } from '@/api/bom/productline/productline'
import { getNationalityList } from '@/api/utils/geography/nationality'
import { deleteSUPFiles } from '@/api/project/subunitproject/supfiles'
import { getPhototypeSupplier } from '@/api/supplier/phototype'
import moment from 'moment'
import XLSX from 'xlsx'
export default {
  name: 'managePhototypeExecuteProjectStatement',

  data() {

    return {
      DataList: [],
      tableLoading: false,
      totalNum: 0,
      pageSize: 30,
      selectNum: 0,
      checkList: [],
      tableData: {
      },
      params: {
        page: 1,
        allSelectTag: 0
      },
      dialogVisibleAdd: false,
      dialogVisibleEdit: false,
      importVisible: false,
      photoViewVisible: false,
      logViewVisible: false,
      formAdd: {},
      formEdit: {},
      OrderDetailsList: [],
      componentDetailsTable: [],
      checkedDetail: [],
      checkedDetailEdit: [],
      photoData: {},
      importFiles: [],
      fileDetails: [],
      logDetails: [],
      url: '',
      srcList: [],
      optionsNationality: [],
      optionsProductLine: [],
      optionsPhototypeSupplier: [],
      optionsCategory: [
        { value: 1, label: '开发构建' },
        { value: 2, label: '版本迭代' },
      ],
      optionsLevel: [
        { value: 0, label: '无' },
        { value: 1, label: 'S' },
        { value: 2, label: 'A' },
        { value: 3, label: 'B' },
        { value: 4, label: 'C' },
      ],
      optionsJudgment: [
        {
          value: true,
          label: '是'
        },
        {
          value: false,
          label: '否'
        }
      ],
      rules: {
        suffix: [
          { required: true, message: '请输入后缀', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      // console.log('我开始运行了')
      console.log(this.params)
      this.tableLoading = true
      // console.log(this.params.create_time)
      if (typeof (this.params.created_time) !== 'undefined') {
        if (this.params.created_time.length === 2) {
          this.params.created_time_after = moment.parseZone(this.params.created_time[0]).local().format('YYYY-MM-DD HH:MM:SS')
          this.params.created_time_before = moment.parseZone(this.params.created_time[1]).local().format('YYYY-MM-DD HH:MM:SS')
        }
      }
      getPhototypeStatement(this.params).then(
        res => {
          this.DataList = res.data.results
          for (var i = 0; i < this.DataList.length; i++){
            this.optionsPhototypeSupplier = [{ label: this.DataList[i].phototype_supplier.name, value: this.DataList[i].phototype_supplier.id }]
            this.DataList[i].phototype_supplier = this.DataList[i].phototype_supplier.id
          }
          // 根据唯一标识no来对数组进行过滤
          this.optionsPhototypeSupplier = this.unique(this.optionsPhototypeSupplier)
          this.totalNum = res.data.count
          this.tableLoading = false
          console.log(res.data.results)
          console.log(this.DataList)
        }
      ).catch(
        () => {
          this.tableLoading = false
        }
      )
    },
    // 检索用户组选项
    unique(arr) {
      // 根据唯一标识no来对数组进行过滤
      // 定义常量 res,值为一个Map对象实例
      const res = new Map()
      // 返回arr数组过滤后的结果，结果为一个数组   过滤条件是对象中的value值，
      // 如果res中没有某个键，就设置这个键的值为1
      return arr.filter((arr) => !res.has(arr.value) && res.set(arr.value, 1))
    },
    handleCurrentChange(val) {
      this.params.page = val
      this.fetchData()
    },

    // 图片上传模块
    handlePhotoUpload(userValue) {
      this.photoData.id = userValue.id
      this.importVisible = true

    },
    getFile(event) {
      // const filetypes =[".jpg",".png"]
      let filemaxsize = 1024*2
      let fileSize = 0
      for (var i = 0; i < event.target.files.length; i++) {
        let file = event.target.files[i]
        let verify_type = false
        let suffix_name = file.name.substring(file.name.indexOf('.'))
        console.log(suffix_name)
        fileSize = file.size / 1048576
        console.log(fileSize)
        if (fileSize > this.$store.state.user.uploadSize) {
          this.$notify({
            title: '错误详情',
            message: '文件最大4M',
            type: 'error',
            offset: 70,
            duration: 0
          })
          this.$refs.photofiles.type = 'text'
          this.$refs.photofiles.value = ''
          this.$refs.photofiles.type = 'file'
          this.importFiles = []
          return false
        }
        // for (let i = 0; i < filetypes.length; i++) {
        //   if (filetypes[i] == suffix_name) {
        //     verify_type = true
        //     break
        //   }
        // }
        // if (!verify_type) {
        //   this.$notify({
        //     title: '错误详情',
        //     message: '文件只支持png,jpg',
        //     type: 'error',
        //     offset: 70,
        //     duration: 0
        //   })
        //   this.$refs.photofiles.type = 'text'
        //   this.$refs.photofiles.value = ''
        //   this.$refs.photofiles.type = 'file'
        //   this.importFiles = []
        //   return false
        // }
        this.importFiles.push(file)
      }
    },
    importPhotoes() {
      const importformData = new FormData()
      for (let i = 0; i < this.importFiles.length; i++) {
        importformData.append('files', this.importFiles[i])
      }
      importformData.append('id', this.photoData.id)
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      this.tableLoading = true
      photoImportPhototypeStatement(importformData, config).then(
        res => {
          this.$notify({
            title: '导入结果',
            message: res.data,
            type: 'success',
            duration: 0
          })
          this.fetchData()
          this.closeImport()
        }).catch(
        (error) => {
          console.log('1')
          this.$notify({
            title: '导入错误',
            message: error.data,
            type: 'error',
            duration: 0
          })
        }
      )
    },
    closeImport() {
      this.$refs.photofiles.type = 'text'
      this.$refs.photofiles.value = ''
      this.$refs.photofiles.type = 'file'
      this.importFiles = []
      this.importVisible = false
    },
    // 查看文档
    handlePhotoView(userValue) {
      this.fileDetails = []
      this.photoViewVisible = true
      const data = {
        id: userValue.id
      }
      getFileDetailsPhototypeExecuteProject(data).then(
        res => {
          this.$notify({
            title: '查询成功',
            type: 'success',
            duration: 1000
          })
          this.fileDetails = res.data
        }).catch(
        (error) => {
          console.log('1')
          this.$notify({
            title: '查询错误',
            message: error.data,
            type: 'error',
            duration: 0
          })
        }
      )
    },
    // 查看日志
    logView(userValue) {
      this.logDetails = []
      this.logViewVisible = true
      const data = {
        id: userValue.id
      }
      getLogPhototypeStatement(data).then(
        res => {
          this.$notify({
            title: '查询成功',
            type: 'success',
            duration: 1000
          })
          this.logDetails = res.data
        }).catch(
        (error) => {
          console.log('1')
          this.$notify({
            title: '查询错误',
            message: error.data,
            type: 'error',
            duration: 0
          })
        }
      )
    },

    // 导入
    importExcel() {
      const h = this.$createElement
      this.$msgbox({
        title: '导入 文件',
        name: 'importmsg',
        message: h('p', null, [
          h('h3', { style: 'color: teal' }, '特别注意：'),
          h('p', null, '针对不同的模块，需要严格按照模板要求进行，无法导入的情况，请联系系统管理员'),
          h('h4', null, '浏览并选择文件：'),
          h('input', { attrs: {
              name: 'importfile',
              type: 'file'
            }}, null, '导入文件' ),
          h('p', null),
          h('hr', null)
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '执行中...'
            const importformData = new FormData()
            importformData.append('file', document.getElementsByName("importfile")[0].files[0])
            const config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
            excelImportPhototypeStatement(importformData, config).then(
              res => {
                this.$notify({
                  title: '导入结果',
                  message: res.data,
                  type: 'success',
                  duration: 0
                })
                instance.confirmButtonLoading = false
                document.getElementsByName("importfile")[0].type = 'text'
                document.getElementsByName("importfile")[0].value = ''
                document.getElementsByName("importfile")[0].type = 'file'
                this.fetchData()
                done()
              },
              err => {
                this.$notify({
                  title: '失败原因',
                  message: err.data,
                  type: 'success',
                  duration: 0
                })
                instance.confirmButtonLoading = false
                this.fetchData()
                done()
              }
            )
          } else {
            document.getElementsByName("importfile")[0].type = 'text'
            document.getElementsByName("importfile")[0].value = ''
            document.getElementsByName("importfile")[0].type = 'file'
            this.fetchData()
            done()
          }
        }
      }).then(action => {
        console.log(action)
      }).catch(
        (error) => {
          this.$notify({
            title: '失败原因',
            message: error.data,
            type: 'success',
            duration: 0
          })
        }
      )
    },
    // 导出
    exportExcel() {
      const h = this.$createElement
      let resultMessage, resultType
      this.$msgbox({
        title: '导出 Excel',
        message: h('p', null, [
          h('h3', { style: 'color: teal' }, '特别注意：'),
          h('hr', null, ''),
          h('span', null, '系统限制导出最大条数为2000条，如果超过2000条，请根据时间条件重新筛选。否则只导出前2000条!如果要大量导出数据请联系管理员。'),
          h('hr', null, ''),
          h('span', null, '系统导出数据优先按照当前多重筛选的条件，如果没有设置条件则导出全部数据。注意导出数据数量，超出最大数量则无法全部导出！'),
          h('hr', null, '')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '执行中...'
            exportPhototypeStatement(this.params).then(
              res => {
                res.data = res.data.map(item => {
                  return {
                    整机版本名: item.name.name,
                    整机版本编码: item.name.code,
                    类型: item.category.name,
                    是否定名: item.name.is_named,
                    国别: item.name.nationality,
                    系列排序: item.name.serial_number,
                    整机排序: item.name.unit_number,
                    级别: item.level.name,
                    备注: item.memo,
                    创建时间: item.create_time,
                    更新时间: item.update_time,
                    创建者: item.creator
                  }
                })
                const ws = XLSX.utils.json_to_sheet(res.data)
                const wb = XLSX.utils.book_new()
                XLSX.utils.book_append_sheet(wb, ws, '数据详情')
                XLSX.writeFile(wb, '列表详情1.xlsx')
                resultMessage = '表格导出成功啦'
                resultType = 'success'
                instance.confirmButtonLoading = false
                done()
              },
              err => {
                console.log(err)
                resultMessage = '表格导出失败啦'
                resultType = 'error'
                instance.confirmButtonLoading = false
                done()
              }
            )
          } else {
            done()
          }
        }
      }).then(action => {
        console.log(action)
        this.$message({
          type: resultType,
          message: '最终结果: ' + resultMessage
        })
      }).catch(
        (error) => {
          console.log(error)
        }
      )
    },
    // 选择器，单选和多选（主表的）
    handleSelectionChange(val) {
      this.multipleSelection = val
      if (this.selectNum !== this.totalNum || this.multipleSelection.length < 30) {
        this.selectNum = this.multipleSelection.length
        this.params.allSelectTag = 0
      }
    },
    // 全选的
    checkAllOption() {
      this.$refs.tableList.clearSelection()
      this.$refs.tableList.toggleAllSelection()
      this.params.allSelectTag = 1
      this.selectNum = this.totalNum
      console.log('我是全选的' + this.selectNum)
    },
    // 标记单据
    handleSetTag() {
      this.tableLoading = true
      if (this.params.allSelectTag === 1) {
        setTagPhototypeStatement(this.params).then(
          res => {
            if (res.data.successful !== 0) {
              this.$notify({
                title: '设置成功',
                message: `设置成功条数：${res.data.successful}`,
                type: 'success',
                offset: 70,
                duration: 3000
              })
            }
            if (res.data.false !== 0) {
              this.$notify({
                title: '设置失败',
                message: `设置失败条数：${res.data.false}`,
                type: 'error',
                offset: 140,
                duration: 0
              })
              this.$notify({
                title: '错误详情',
                message: res.data.error,
                type: 'error',
                offset: 210,
                duration: 0
              })
            }
            delete this.params.allSelectTag
            this.fetchData()
          }).catch(
          (error) => {
            this.$notify({
              title: '错误详情',
              message: error.data,
              type: 'error',
              offset: 210,
              duration: 0
            })
            this.fetchData()
          }
        )
      } else {
        console.log(this.multipleSelection)
        if (typeof (this.multipleSelection) === 'undefined') {
          this.$notify({
            title: '错误详情',
            message: '未选择订单无法审核',
            type: 'error',
            offset: 70,
            duration: 0
          })
          this.fetchData()
        }
        const ids = this.multipleSelection.map(item => item.id)
        this.params.ids = ids
        setTagPhototypeStatement(this.params).then(
          res => {
            if (res.data.successful !== 0) {
              this.$notify({
                title: '设置成功',
                message: `设置成功条数：${res.data.successful}`,
                type: 'success',
                offset: 70,
                duration: 3000
              })
            }
            if (res.data.false !== 0) {
              this.$notify({
                title: '设置失败',
                message: `设置失败条数：${res.data.false}`,
                type: 'error',
                offset: 140,
                duration: 0
              })
              this.$notify({
                title: '错误详情',
                message: res.data.error,
                type: 'error',
                offset: 210,
                duration: 0
              })
            }
            console.log(this.params)
            console.log(this.params.ids)

            delete this.params.ids
            this.fetchData()
          }).catch(
          (error) => {
            delete this.params.ids
            this.$notify({
              title: '错误详情',
              message: error.data,
              type: 'error',
              offset: 210,
              duration: 0
            })
            this.fetchData()
          }
        )
      }
    },
   
    // 重置标记
    handleResetTag() {
      this.tableLoading = true
      if (this.params.allSelectTag === 1) {
        resetTagPhototypeStatement(this.params).then(
          res => {
            if (res.data.successful !== 0) {
              this.$notify({
                title: '设置成功',
                message: `设置成功条数：${res.data.successful}`,
                type: 'success',
                offset: 70,
                duration: 3000
              })
            }
            if (res.data.false !== 0) {
              this.$notify({
                title: '设置失败',
                message: `设置失败条数：${res.data.false}`,
                type: 'error',
                offset: 140,
                duration: 0
              })
              this.$notify({
                title: '错误详情',
                message: res.data.error,
                type: 'error',
                offset: 210,
                duration: 0
              })
            }
            delete this.params.allSelectTag
            this.fetchData()
          }).catch(
          (error) => {
            this.$notify({
              title: '错误详情',
              message: error.data,
              type: 'error',
              offset: 210,
              duration: 0
            })
            this.fetchData()
          }
        )
      } else {
        console.log(this.multipleSelection)
        if (typeof (this.multipleSelection) === 'undefined') {
          this.$notify({
            title: '错误详情',
            message: '未选择订单无法审核',
            type: 'error',
            offset: 70,
            duration: 0
          })
          this.fetchData()
        }
        const ids = this.multipleSelection.map(item => item.id)
        this.params.ids = ids
        resetTagPhototypeStatement(this.params).then(
          res => {
            if (res.data.successful !== 0) {
              this.$notify({
                title: '设置成功',
                message: `设置成功条数：${res.data.successful}`,
                type: 'success',
                offset: 70,
                duration: 3000
              })
            }
            if (res.data.false !== 0) {
              this.$notify({
                title: '设置失败',
                message: `设置失败条数：${res.data.false}`,
                type: 'error',
                offset: 140,
                duration: 0
              })
              this.$notify({
                title: '错误详情',
                message: res.data.error,
                type: 'error',
                offset: 210,
                duration: 0
              })
            }
            console.log(this.params)
            console.log(this.params.ids)

            delete this.params.ids
            this.fetchData()
          }).catch(
          (error) => {
            delete this.params.ids
            this.$notify({
              title: '错误详情',
              message: error.data,
              type: 'error',
              offset: 210,
              duration: 0
            })
            this.fetchData()
          }
        )
      }
    },
    // 审核单据
    handleFix() {
      const h = this.$createElement
      let resultMessage, resultType
      this.$msgbox({
        title: '确认项目',
        message: h('p', null, [
          h('h3', { style: 'color: teal' }, '特别注意：'),
          h('hr', null, ''),
          h('span', null, '系统会自动创建系列关联的对应组件。'),
          h('b', { style: 'color: red' }, '新建内容可查看日志！'),
          h('hr', null, '')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            this.tableLoading = true
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '执行中...'
            if (this.params.allSelectTag === 1) {
              checkPhototypeStatement(this.params).then(
                res => {
                  if (res.data.successful !== 0) {
                    this.$notify({
                      title: '确认成功',
                      message: `确认成功条数：${res.data.successful}`,
                      type: 'success',
                      offset: 70,
                      duration: 3000
                    })
                  }
                  if (res.data.false !== 0) {
                    this.$notify({
                      title: '确认消失败',
                      message: `确认败条数：${res.data.false}`,
                      type: 'error',
                      offset: 140,
                      duration: 0
                    })
                    this.$notify({
                      title: '失败错误详情',
                      message: res.data.error,
                      type: 'error',
                      offset: 210,
                      duration: 0
                    })
                  }
                  delete this.params.allSelectTag
                  instance.confirmButtonLoading = false
                  done()
                  this.fetchData()
                }).catch(
                (error) => {
                  this.$notify({
                    title: '异常错误详情',
                    message: error.data,
                    type: 'error',
                    offset: 210,
                    duration: 0
                  })
                  instance.confirmButtonLoading = false
                  done()
                  this.fetchData()
                }
              )
            } else {
              if (typeof (this.multipleSelection) === 'undefined') {
                this.$notify({
                  title: '错误详情',
                  message: '未选择项目无法取消',
                  type: 'error',
                  offset: 70,
                  duration: 0
                })
                instance.confirmButtonLoading = false
                done()
                this.fetchData()
              }
              const ids = this.multipleSelection.map(item => item.id)
              this.params.ids = ids
              checkPhototypeStatement(this.params).then(
                res => {
                  if (res.data.successful !== 0) {
                    this.$notify({
                      title: '确认成功',
                      message: `确认成功条数：${res.data.successful}`,
                      type: 'success',
                      offset: 70,
                      duration: 3000
                    })
                  }
                  if (res.data.false !== 0) {
                    this.$notify({
                      title: '确认失败',
                      message: `确认败条数：${res.data.false}`,
                      type: 'error',
                      offset: 140,
                      duration: 0
                    })
                    this.$notify({
                      title: '失败错误详情',
                      message: res.data.error,
                      type: 'error',
                      offset: 210,
                      duration: 0
                    })
                  }
                  delete this.params.allSelectTag
                  instance.confirmButtonLoading = false
                  done()
                  this.fetchData()
                }).catch(
                (error) => {
                  this.$notify({
                    title: '异常错误详情',
                    message: error.data,
                    type: 'error',
                    offset: 210,
                    duration: 0
                  })
                  instance.confirmButtonLoading = false
                  done()
                  this.fetchData()
                }
              )
            }
          } else {
            done()
            this.fetchData()
          }
        }
      }).then().catch(
        (error) => {
          this.$notify({
            title: '异常错误详情',
            message: error.data,
            type: 'error',
            offset: 210,
            duration: 0
          })
          this.fetchData()
        }
      )
    },
    handleReject() {
      const h = this.$createElement
      let resultMessage, resultType
      this.$msgbox({
        title: '驳回项目',
        message: h('p', null, [
          h('h3', { style: 'color: teal' }, '特别注意：'),
          h('hr', null, ''),
          h('span', null, '驳回项目，则此项目在待确认状态下上传的文件将全部丢失'),
          h('b',  { style: 'color: red' }, '如果是版本迭代类型则直接取消，无法恢复，请慎重选择！'),
          h('hr', null, '')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            this.tableLoading = true
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '执行中...'
            if (this.params.allSelectTag === 1) {
              rejectPhototypeStatement(this.params).then(
                res => {
                  if (res.data.successful !== 0) {
                    this.$notify({
                      title: '驳回成功',
                      message: `驳回成功条数：${res.data.successful}`,
                      type: 'success',
                      offset: 70,
                      duration: 3000
                    })
                  }
                  if (res.data.false !== 0) {
                    this.$notify({
                      title: '驳回消失败',
                      message: `驳回败条数：${res.data.false}`,
                      type: 'error',
                      offset: 140,
                      duration: 0
                    })
                    this.$notify({
                      title: '失败错误详情',
                      message: res.data.error,
                      type: 'error',
                      offset: 210,
                      duration: 0
                    })
                  }
                  delete this.params.allSelectTag
                  instance.confirmButtonLoading = false
                  done()
                  this.fetchData()
                }).catch(
                (error) => {
                  this.$notify({
                    title: '异常错误详情',
                    message: error.data,
                    type: 'error',
                    offset: 210,
                    duration: 0
                  })
                  instance.confirmButtonLoading = false
                  done()
                  this.fetchData()
                }
              )
            } else {
              if (typeof (this.multipleSelection) === 'undefined') {
                this.$notify({
                  title: '错误详情',
                  message: '未选择项目无法取消',
                  type: 'error',
                  offset: 70,
                  duration: 0
                })
                instance.confirmButtonLoading = false
                done()
                this.fetchData()
              }
              const ids = this.multipleSelection.map(item => item.id)
              this.params.ids = ids
              rejectPhototypeStatement(this.params).then(
                res => {
                  if (res.data.successful !== 0) {
                    this.$notify({
                      title: '驳回成功',
                      message: `驳回成功条数：${res.data.successful}`,
                      type: 'success',
                      offset: 70,
                      duration: 3000
                    })
                  }
                  if (res.data.false !== 0) {
                    this.$notify({
                      title: '驳回失败',
                      message: `驳回败条数：${res.data.false}`,
                      type: 'error',
                      offset: 140,
                      duration: 0
                    })
                    this.$notify({
                      title: '失败错误详情',
                      message: res.data.error,
                      type: 'error',
                      offset: 210,
                      duration: 0
                    })
                  }
                  delete this.params.allSelectTag
                  instance.confirmButtonLoading = false
                  done()
                  this.fetchData()
                }).catch(
                (error) => {
                  this.$notify({
                    title: '异常错误详情',
                    message: error.data,
                    type: 'error',
                    offset: 210,
                    duration: 0
                  })
                  instance.confirmButtonLoading = false
                  done()
                  this.fetchData()
                }
              )
            }
          } else {
            done()
            this.fetchData()
          }
        }
      }).then().catch(
        (error) => {
          this.$notify({
            title: '异常错误详情',
            message: error.data,
            type: 'error',
            offset: 210,
            duration: 0
          })
          this.fetchData()
        }
      )
    },
    // 货品搜索
    remoteMethodProductLine(query) {
      if (query !== '') {
        // console.log("我准备开始检索啦")
        setTimeout(() => {
          // console.log("我是真正的开始检索啦")
          const paramsSearch = {}
          paramsSearch.name = query
          getProductLineList(paramsSearch).then(
            res => {
              this.optionsProductLine = res.data.results.map(item => {
                return { label: item.name, value: item.id }
              })
            }
          )
        }, 200)
      } else {
        this.optionsProductLine = []
      }
    },
    // 公司搜索
    remoteMethodNationality(query) {
      if (query !== '') {
        // console.log("我准备开始检索啦")
        setTimeout(() => {
          // console.log("我是真正的开始检索啦")
          const paramsSearch = {}
          paramsSearch.name = query
          getNationalityList(paramsSearch).then(
            res => {
              this.optionsNationality = res.data.results.map(item => {
                return { label: item.name, value: item.id }
              })
            }
          )
        }, 200)
      } else {
        this.optionsNationality = []
      }
    },
    // 排序
    onSortChange({ prop, order }) {
      console.log(this.GroupList)
      this.DataList.sort(this.compare(prop, order))
    },
    // 排序
    compare(propertyName, sort) {
      return function(obj1, obj2) {
        var value1 = obj1[propertyName]
        if (typeof (value1) === 'object') {
          value1 = value1.name
        }

        var value2 = obj2[propertyName]
        if (typeof (value2) === 'object') {
          value2 = value2.name
        }
        if (typeof value1 === 'string' && typeof value2 === 'string') {
          const res = value1.localeCompare(value2, 'zh')
          return sort === 'ascending' ? res : -res
        } else {
          if (value1 <= value2) {
            return sort === 'ascending' ? -1 : 1
          } else if (value1 > value2) {
            return sort === 'ascending' ? 1 : -1
          }
        }
      }
    },
    // 删除文档
    handleDelete(row) {
      const data = {
        id: row.id
      }
      deleteSUPFiles(data).then(
        (res) => {
          if (res.data.successful > 0){
            this.$notify({
              title: '删除成功',
              type: 'success',
              message: `删除成功条数：${res.data.successful}`,
              offset: 70,
              duration: 3000
            })
            this.fetchData()
          }
          if (res.data.false > 0) {
            this.$notify({
              title: '删除失败',
              type: 'error',
              message: `删除失败错误：已删除或者无权限`,
              offset: 70,
              duration: 3000
            })
            this.fetchData()
          }
        }).catch(
        (error) => {
          this.$notify({
            title: '错误详情',
            message: error.data,
            type: 'error',
            offset: 70,
            duration: 0
          })
        }
      )
    },
    // 表格样式
    rowStyle({ row, rowIndex}) {
      let row_style = {}
      if (row.process_tag === 1) {
        row_style = {
          backgroundColor: 'palegreen'
        }
      } 
      return row_style
    },
    handelDoubleClick(row, column, cell, event) {
      if (column.property === 'memo') {
        this.handleMemo(row)
      } else if (column.property === 'adjust_amount') {
        this.handleAdjustAmount(row)
      }
    },
    handleMemo(row) {
      this.$prompt('请输入备注', '添加备注', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        inputValue: row.memo,
        inputErrorMessage: '输入不能为空',
        inputValidator: (value) => {
        if(!value) {
          return '输入不能为空';
        }
      }
      }).then(
        ({ value }) => {
          let CurrentTimeStamp = new Date()
          let SubmitTimeStamp = CurrentTimeStamp.toLocaleDateString()
          value = `${value} {${this.$store.state.user.name}-${SubmitTimeStamp}}`
          let id = row.id
          let data = {
            memo: value
          }
          updatePhototypeStatement(id, data).then(
            () => {
              this.$notify({
                title: '修改成功',
                type: 'success',
                offset: 70,
                duration: 3000
              })
              this.fetchData()
            }).catch(
            (error) => {
              this.$notify({
                title: '修改失败',
                message: `修改失败：${error.data}`,
                type: 'error',
                offset: 70,
                duration: 0
              })
              this.fetchData()
            }
          )
      }).catch(
        (error) => {
        this.$notify({
          title: '修改失败',
          message: `修改失败：${error.data}`,
          type: 'error',
          offset: 70,
          duration: 0
        })
        this.fetchData()
      })
    },
    handleAdjustAmount(row) {
      this.$prompt('请输入调整金额', '添加备注', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        inputValue: row.adjust_amount,
        inputErrorMessage: '输入不能为空',
        inputValidator: (value) => {
        if(!value) {
          return '输入不能为空';
        }
      }
      }).then(
        ({ value }) => {
          let id = row.id
          let data = {
            adjust_amount: value
          }
          updatePhototypeStatement(id, data).then(
            () => {
              this.$notify({
                title: '修改成功',
                type: 'success',
                offset: 70,
                duration: 3000
              })
              this.fetchData()
            }).catch(
            (error) => {
              this.$notify({
                title: '修改失败',
                message: `修改失败：${error.data}`,
                type: 'error',
                offset: 70,
                duration: 0
              })
              this.fetchData()
            }
          )
      }).catch(
        (error) => {
        this.$notify({
          title: '修改失败',
          message: `修改失败：${error.data}`,
          type: 'error',
          offset: 70,
          duration: 0
        })
        this.fetchData()
      })
    },
    // 跳出编辑对话框
    handleEdit(values) {
        console.log(values)
        this.formEdit = { ...values }
        this.dialogVisibleEdit = true
        this.formEdit.category = this.formEdit.category.name
        this.formEdit.product_line = this.formEdit.product_line.name
        this.formEdit.type = this.formEdit.type.name
        this.formEdit.subunits_version = this.formEdit.subunits_version.name
        this.componentDetailsTable = []
        let index
        for (index in this.formEdit.component_details) {
          this.formEdit.component_details[index].xh = index + 1
          this.componentDetailsTable.push(this.formEdit.component_details[index])
        }
      },
    // 提交编辑完成的数据
    handleSubmitEdit() {
      this.$refs.handleFormEdit.validate(valid => {
        if (!valid) {
          return
        }
        console.log('在编辑')
        let id = this.formEdit.id
        const data = {
          component_details: this.componentDetailsTable
        }
        console.log(data)
        updatePhototypeStatement(id, data).then(
          () => {
            this.dialogVisibleEdit = false
            this.fetchData()
          }).catch(
          (error) => {
            this.$notify({
              title: '错误详情',
              message: error.data,
              type: 'error',
              offset: 210,
              duration: 0
            })
          }
        )
      })
    },

    // 关闭修改界面
    handleCancelEdit() {
      this.dialogVisibleEdit = false
      this.$refs.handleFormEdit.resetFields()
      this.handleDeleteAllDetails()
    },
    // 删除编辑全部表单货品项
    handleDeleteAllDetails() {
      this.componentDetailsTable = undefined
    },
    // 货品列表顺序
    rowClassName({ row, rowIndex }) {
        row.xh = rowIndex + 1
      },
    // 选中编辑表单货品项
    handleDetailSelectionChangeEdit(selection) {
      if (selection.length > 1) {
        this.$refs.tableEdit.clearSelection()
        this.$refs.tableEdit.toggleRowSelection(selection.pop())
      } else {
        this.checkedDetailEdit = selection
      }
    },
    // 删除选中编辑表单货品项
    handleDeleteDetailsEdit() {
      if (this.checkedDetailEdit.length === 0) {
        this.$alert('请先选择要删除的数据', '提示', {
          confirmButtonText: '确定'
        })
      } else {
        this.componentDetailsTable.splice(this.checkedDetailEdit[0].xh - 1, 1)
      }
    },
    // 提交编辑完成的数据
    confirmSupplier(row) {
      const { id, ...details } = row
      const data = {
        phototype_supplier: details.phototype_supplier
      }
      updatePhototypeStatement(id, data).then(
        () => {
          this.$notify({
            title: '修改成功',
            type: 'success',
            offset: 0,
            duration: 3000
          })
          this.fetchData()
        }).catch(
        (error) => {
          this.$notify({
            title: '修改出错',
            message: error.data,
            type: 'error',
            offset: 0,
            duration: 0
          })
          this.fetchData()
        }
      )

    },
    // 手板供应商搜索
    remoteMethodPhototypeSupplier(query) {
      if (query !== '') {
        // console.log("我准备开始检索啦")
        setTimeout(() => {
          // console.log("我是真正的开始检索啦")
          const paramsSearch = {}
          paramsSearch.name = query
          getPhototypeSupplier(paramsSearch).then(
            res => {
              this.optionsPhototypeSupplier = res.data.results.map(item => {
                return { label: item.name, value: item.id }
              })
            }
          )
        }, 200)
      } else {
        this.optionsPhototypeSupplier = []
      }
    },
    // 表格样式
    rowStyle({ row, rowIndex}) {
      let row_style = {}
      if (row.process_tag === 1) {
        row_style = {
          backgroundColor: 'palegreen'
        } 
      } 
      else if (row.process_tag === 9) {
        row_style = {
          backgroundColor: '#f39800'
        } 
      }
      return row_style
    },
    resetParams() {
      this.params = {
        page: 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.users-container {
    position: relative;
    display: block;
}
.titleBar {

}
.tableTitle {
  position: fixed;
  width: 99%;
  // position: relative;
  // display: block;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  z-index: 2;
  background-color: #b3d3c2;
}
.table-list {
  padding: 115px 15px 0px 15px;
  margin: 0px 0px 0px 0px;
}
.el-row {
  margin: 0px 0px 5px 0px;
  padding: 5px 20px 5px 15px;
  &:last-child {
    margin-bottom: 0;
  }
}
.tableFoots {
  margin: 0px 0px 5px 0px;
  padding: 5px 20px 5px 15px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  /*background: #d3dce6;*/
}
.bg-purple-light {
  /*background: #e5e9f2;*/
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  /*background-color: #f9fafc;*/
}
#tableBody {
  z-index: 1;
}
</style>
