<template>
  <div class="originunitproject-submit-container">
    <div class="tableTitle">
      <el-row :gutter="20">
        <el-col :span="4" class="titleBar">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="快捷搜索" placement="top-start">
              <el-input v-model="params.name" class="grid-content bg-purple" placeholder="请输入项目名" @keyup.enter.native="fetchData">
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
                      <el-col :span="8"><el-form-item label="原初物料" prop="name">
                        <el-input v-model="params.name" placeholder="请输入原初物料" />
                      </el-form-item></el-col>
                      <el-col :span="8"><el-form-item label="原初物料编码" prop="code">
                        <el-input v-model="params.code" placeholder="请输入原初物料编码" />
                      </el-form-item></el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="8"><el-form-item label="单据类型" prop="order_category">
                        <el-select v-model="params.order_category" clearable placeholder="请选择级别">
                          <el-option
                            v-for="item in optionsOrderCategory"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </el-form-item></el-col>
                      <el-col :span="8"><el-form-item label="文件名" prop="file_name">
                        <el-input v-model="params.file_name" placeholder="请输入文件名" />
                      </el-form-item></el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="8"><el-form-item label="组项项目" prop="component_project">
                        <template>
                          <el-select
                            v-model="params.component_project"
                            filterable
                            default-first-option
                            remote
                            reserve-keyword
                            clearable
                            placeholder="请搜索并选择组项项目！"
                            :remote-method="remoteMethodComponentProject"
                          >
                            <el-option
                              v-for="item in optionsComponentProject"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            />
                          </el-select>
                        </template>
                      </el-form-item></el-col>
                      <el-col :span="8"><el-form-item label="类型" prop="category">
                        <template>
                          <el-select
                            v-model="params.category"
                            filterable
                            default-first-option
                            remote
                            reserve-keyword
                            clearable
                            placeholder="请搜索并选择物料类型！"
                            :remote-method="remoteMethodPartsCategory"
                          >
                            <el-option
                              v-for="item in optionsPartsCategory"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            />
                          </el-select>
                        </template>
                      </el-form-item></el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="8"><el-form-item label="爆炸图号" prop="diagram_number">
                        <el-input v-model="params.diagram_number" placeholder="请输入爆炸图号" />
                      </el-form-item></el-col>
                      <el-col :span="8"><el-form-item label="规格" prop="specification">
                        <el-input v-model="params.specification" placeholder="请输入规格" />
                      </el-form-item></el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="8"><el-form-item label="工艺" prop="technology">
                        <el-input v-model="params.technology" placeholder="请输入工艺" />
                      </el-form-item></el-col>
                      <el-col :span="8"><el-form-item label="原材料" prop="material">
                        <template>
                          <el-select
                            v-model="params.material"
                            filterable
                            default-first-option
                            remote
                            reserve-keyword
                            clearable
                            placeholder="请搜索并选择原材料！"
                            :remote-method="remoteMethodMaterial"
                          >
                            <el-option
                              v-for="item in optionsMaterial"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            />
                          </el-select>
                        </template>
                      </el-form-item></el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="6"><el-form-item label="创建者" prop="creator">
                        <el-input v-model="params.creator" type="text" />
                      </el-form-item></el-col>
                      <el-col :span="6" />
                      <el-col :span="6" />
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="6"><el-form-item label="是否组件">
                        <el-select v-model="params.is_group" clearable placeholder="是否定名">
                          <el-option
                            v-for="item in optionsJudgment"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </el-form-item></el-col>
                      <el-col :span="6"><el-form-item label="是否制板">
                        <el-select v-model="params.is_making" clearable placeholder="是否定名">
                          <el-option
                            v-for="item in optionsJudgment"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </el-form-item></el-col>
                      <el-col :span="6" />
                    </el-row>

                    <el-row :gutter="20">
                      <el-col :span="12"><el-form-item label="创建时间">
                        <div class="block">
                          <el-date-picker
                            v-model="params.created_time"
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
        @sort-change="onSortChange"
      >
        <el-table-column
          label="ID"
        >
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="点击绿色按钮进入编辑" placement="top-start">
              <el-tag type="success" @click="handleEdit(scope.row)"><span>{{ scope.row.id }}</span></el-tag>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          label="原初物料"
          prop="name"
          width="150px"
          sortable="custom"
          :sort-orders="['ascending','descending']"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="原初物料编码"
          prop="code"
          sortable="custom"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.code }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="文件名"
          prop="file_name"
          sortable="custom"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.file_name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="错误原因"
          prop="mistake_tag"
          sortable="custom"
          :sort-orders="['ascending','descending']"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.mistake_tag.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="类型"
          prop="category"
          sortable="custom"
          :sort-orders="['ascending','descending']"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.category.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="产品线"
          prop="product_line"
          sortable="custom"
          :sort-orders="['ascending','descending']"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.product_line.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="整机项目"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.unit_project.name }}</span>
          </template>
        </el-table-column>

        <el-table-column
          label="子项项目"
          prop="subunit_project"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.subunit_project.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="组项项目"
          prop="component_project"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.component_project.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="组项编码"
          prop="component_code"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.component_code }}</span>
          </template>
        </el-table-column>
        
        <el-table-column
          label="爆炸图号"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.diagram_number }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="规格"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.specification }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="工艺"
          width="180px"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.technology }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="原材料"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.material.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="成型收缩率"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.shrinkage }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="材料色号"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.material_color_number }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="用量"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.quantity }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="克重"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.weight }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="是否喷漆"
          prop="is_lacquered"
        >
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.is_lacquered"
              active-color="#13ce66"
              inactive-color="#ff4949"
              disabled
            />
          </template>

        </el-table-column>
        <el-table-column
          label="是否组件"
          prop="is_group"
        >
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.is_group"
              active-color="#13ce66"
              inactive-color="#ff4949"
              disabled
            />
          </template>

        </el-table-column>
        <el-table-column
          label="色号"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.color_number }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="分组序号"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.group_code }}</span>
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
          label="图片上传"
        >
          <template slot-scope="scope">
            <el-button type="danger" size="mini" @click="handlePhotoUpload(scope.row)">上传</el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="图片查看"
        >
          <template slot-scope="scope">
            <el-button type="danger" size="mini" @click="handlePhotoView(scope.row)">查看</el-button>
          </template>
        </el-table-column>

        <el-table-column
          label="备注"
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
    <!--图片查看模态窗-->
    <el-dialog
      title="文档查看"
      :visible.sync="photoViewVisible"
      width="70%"
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
          >
            <template slot-scope="scope">
              <span>{{ scope.row.creator }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>


    </el-dialog>
    <!--日志查看模态窗-->
    <el-dialog
      title="日志查看"
      :visible.sync="logViewVisible"
      width="60%"
      border
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <div style="margin: auto">
        <el-table :data="logDetails">
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
            width="320px"
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
  getOriginInitialPartProject,
  exportOriginInitialPartProject,
  getLogOriginInitialPartProject
} from '@/api/project/initialpartproject/oriinitialpartproject/manage'
import { getProductLineList } from '@/api/bom/productline/productline'
import { getNationalityList } from '@/api/utils/geography/nationality'
import { deleteOUPPhoto } from '@/api/project/unitproject/originunitproject/oupphoto'
import moment from 'moment'
import XLSX from 'xlsx'
export default {
  name: 'submitOriginUnitProject',

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
      photoData: {},
      importFiles: [],
      fileDetails: [],
      logDetails: [],
      url: '',
      srcList: [],
      optionsNationality: [],
      optionsProductLine: [],
      optionsComponentProject: [],
      optionsPartsCategory: [],
      optionsMaterial: [],
      optionsCategory: [],
      optionsOrderCategory: [
        { value: 1, label: '全新创建' },
        { value: 2, label: '使用已有' },
      ],
      optionsLevel: [
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
      getOriginInitialPartProject(this.params).then(
        res => {
          this.DataList = res.data.results
          this.totalNum = res.data.count
          this.tableLoading = false
          console.log(res.data.results)
        }
      ).catch(
        () => {
          this.tableLoading = false
        }
      )
    },
    handleCurrentChange(val) {
      this.params.page = val
      this.fetchData()
    },

    // 查看文档
    handlePhotoView(userValue) {
      this.fileDetails = []
      this.photoViewVisible = true
      const data = {
        id: userValue.id
      }
      getFileDetailsOriginInitialPartProject(data).then(
        res => {
          this.$notify({
            title: '查询成功',
            type: 'success',
            duration: 1000
          })
          this.fileDetails = res.data
        }).catch(
        (error) => {
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
      getLogOriginInitialPartProject(data).then(
        res => {
          this.$notify({
            title: '查询成功',
            type: 'success',
            duration: 1000
          })
          this.logDetails = res.data
        }).catch(
        (error) => {
          this.$notify({
            title: '查询错误',
            message: error.data,
            type: 'error',
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
            exportOriginInitialPartProject(this.params).then(
              res => {
                res.data = res.data.map(item => {
                  return {
                    原初物料: item.name,
                    原初物料编码: item.code,
                    文件名: item.file_name,
                    类型: item.category.name,
                    产品线: item.product_line.name,
                    整机项目: item.unit_project.name,
                    子项项目: item.subunit_project.name,
                    组项项目: item.component_project.name,
                    组项编码: item.component_code,
                    爆炸图号: item.diagram_number,
                    规格: item.specification,
                    工艺: item.technology,
                    原材料: item.material.name,
                    成型收缩率: item.shrinkage,
                    材料色号: item.material_color_number,
                    用量: item.quantity,
                    克重: item.weight,
                    是否喷漆: item.is_lacquered,
                    是否组件: item.is_group,
                    色号: item.color_number,
                    分组编码: item.group_code,
                    是否制板: item.is_making,
                    错误原因: item.mistake_tag,
                    创建时间: item.created_time,
                    更新时间: item.updated_time,
                    创建者: item.creator.name
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

    // 组项搜索
    remoteMethodComponentProject(query) {
      if (query !== '') {
        // console.log("我准备开始检索啦")
        setTimeout(() => {
          // console.log("我是真正的开始检索啦")
          const paramsSearch = {}
          paramsSearch.name = query
          getComponentProjectDevelop(paramsSearch).then(
            res => {
              this.optionsComponentProject = res.data.results.map(item => {
                return { label: item.name, value: item.id }
              })
            }
          )
        }, 200)
      } else {
        this.optionsComponentProject = []
      }
    },
    // 物料类型搜索
    remoteMethodPartsCategory(query) {
      if (query !== '') {
        // console.log("我准备开始检索啦")
        setTimeout(() => {
          // console.log("我是真正的开始检索啦")
          const paramsSearch = {}
          paramsSearch.name = query
          getPartsCategory(paramsSearch).then(
            res => {
              this.optionsPartsCategory = res.data.results.map(item => {
                return { label: item.name, value: item.id }
              })
            }
          )
        }, 200)
      } else {
        this.optionsPartsCategory = []
      }
    },
    // 原材料搜索
    remoteMethodMaterial(query) {
      if (query !== '') {
        // console.log("我准备开始检索啦")
        setTimeout(() => {
          // console.log("我是真正的开始检索啦")
          const paramsSearch = {}
          paramsSearch.name = query
          getMaterialList(paramsSearch).then(
            res => {
              this.optionsMaterial = res.data.results.map(item => {
                return { label: item.name, value: item.id }
              })
            }
          )
        }, 200)
      } else {
        this.optionsMaterial = []
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
