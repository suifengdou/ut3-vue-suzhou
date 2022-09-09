<template>
  <div class="screw-container">
    <div class="tableTitle">
      <el-row :gutter="20">
        <el-col :span="6" class="titleBar">
          <div class="grid-content bg-purple">
            <div id="operationBoard">
              <el-tooltip class="item" effect="dark" content="点击展开操作列表，可执行对应操作" placement="top-start">
                <el-dropdown split-button type="primary" placement="bottom-end" trigger="click">
                  选中所有的{{ selectNum }}项
                  <el-dropdown-menu slot="dropdown" trigger="click">
                    <el-dropdown-item><el-button type="success" icon="el-icon-check" size="mini" round @click="handleCheck">审核工单</el-button></el-dropdown-item>
                    <el-dropdown-item><el-button type="danger" icon="el-icon-close" size="mini" round @click="handleReject">取消工单</el-button></el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="点击选中所有筛选出的订单" placement="top-start">
                <el-button @click="checkAllOption">全选{{ totalNum }}项</el-button>
              </el-tooltip>
            </div>
          </div>
        </el-col>
        <el-col :span="5" class="titleBar">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="快捷搜索" placement="top-start">
              <el-input v-model="params.name" class="grid-content bg-purple" placeholder="请输入名称" @keyup.enter.native="fetchData">
                <el-button slot="append" icon="el-icon-search" @click="fetchData" />
              </el-input>
            </el-tooltip>
          </div>

        </el-col>
        <el-col :span="5" class="titleBar">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="点击弹出导入界面" placement="top-start">
              <el-button type="success" @click="importExcel">导入</el-button>
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="7" class="titleBar">
          <div class="grid-content bg-purple">
            <el-tooltip class="item" effect="dark" content="点击弹出新建界面" placement="top-start">
              <el-button type="primary" @click="add">新增</el-button>
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
                      <el-col :span="6"><el-form-item label="编码" prop="screw_id">
                        <el-input v-model="params.screw_id" type="text" />
                      </el-form-item></el-col>
                      <el-col :span="6"><el-form-item label="牙径" prop="diameter">
                        <el-input v-model="params.diameter" type="text" />
                      </el-form-item></el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="6"><el-form-item label="长度" prop="length">
                        <el-input v-model="params.length" type="text" />
                      </el-form-item></el-col>
                      <el-col :span="6"><el-form-item label="创建者" prop="creator">
                        <el-input v-model="params.creator" type="text" />
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
        @sort-change="onSortChange"
        @selection-change="handleSelectionChange"
      >
        <el-table-column label="ID">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="点击绿色按钮进入编辑" placement="top-start">
              <el-tag type="success"  @click="handleEdit(scope.row)"><span>{{ scope.row.id }}</span></el-tag>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          label="螺丝名称"
          prop="name"
          sortable="custom"
          width="210px"
          :sort-orders="['ascending','descending']"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="螺丝编码"
          prop="code"
          sortable="custom"
          width="190px"
          :sort-orders="['ascending','descending']"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.code }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="牙径"
          prop="diameter"
          sortable="custom"
          :sort-orders="['ascending','descending']"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.diameter }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="长度"
          prop="length"
          sortable="custom"
          :sort-orders="['ascending','descending']"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.length }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="材质"
          prop="material"
          sortable="custom"
          :sort-orders="['ascending','descending']"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.material.name }}</span>
          </template>
        </el-table-column>
        
        <el-table-column
          label="螺丝头型"
          prop="head_type"
          sortable="custom"
          :sort-orders="['ascending','descending']"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.head_type.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="螺丝牙型"
          prop="tooth_type"
          width="140px"
          sortable="custom"
          :sort-orders="['ascending','descending']"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.tooth_type.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="热处理"
          prop="heat_treated"
          sortable="custom"
          :sort-orders="['ascending','descending']"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.heat_treated.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="表面处理"
          prop="finish"
          sortable="custom"
          :sort-orders="['ascending','descending']"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.finish.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="开槽类型"
          prop="slot_type"
          sortable="custom"
          :sort-orders="['ascending','descending']"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.slot_type.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="初始物料"
          prop="initial_parts"
          width="210px"
          sortable="custom"
          :sort-orders="['ascending','descending']"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.initial_parts.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="备注"
          prop="memo"
          sortable="custom"
          :sort-orders="['ascending','descending']"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.memo }}</span>
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
    <!--新建添加模态窗-->
    <el-dialog
      title="新增"
      width="80%"
      :visible.sync="dialogVisibleAdd"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <el-form
        ref="handleFormAdd"
        label-width="88px"
        size="mini"
        :rules="rules"
        :model="formAdd"
      >
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>相关信息</span>
          </div>
          <el-row :gutter="20">
            <el-col :span="8"><el-form-item label="牙径" prop="diameter">
              <el-input v-model="formAdd.diameter" placeholder="请输入牙径" />
            </el-form-item></el-col>
            <el-col :span="8"><el-form-item label="长度" prop="length">
              <el-input v-model="formAdd.length" placeholder="请输入长度" />
            </el-form-item></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8"><el-form-item label="材质" prop="material">
              <el-select v-model="formAdd.material" placeholder="请选择材质">
                <el-option
                  v-for="item in optionsMaterial"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item></el-col>
            <el-col :span="8"><el-form-item label="热处理" prop="heat_treated">
              <el-select v-model="formAdd.heat_treated" clearable placeholder="请选择热处理">
                <el-option
                  v-for="item in optionsHeatTreated"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8"><el-form-item label="螺丝头型" prop="head_type">
              <el-select v-model="formAdd.head_type" placeholder="请选择螺丝头型">
                <el-option
                  v-for="item in optionsHeadType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item></el-col>
            <el-col :span="8"><el-form-item label="螺丝牙型" prop="tooth_type">
              <el-select v-model="formAdd.tooth_type" placeholder="请选择螺丝牙型">
                <el-option
                  v-for="item in optionsToothType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8"><el-form-item label="表面处理" prop="finish">
              <el-select v-model="formAdd.finish" placeholder="请选择表面处理">
                <el-option
                  v-for="item in optionsFinish"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item></el-col>
            <el-col :span="8"><el-form-item label="开槽类型" prop="slot_type">
              <el-select v-model="formAdd.slot_type" placeholder="请选择开槽类型">
                <el-option
                  v-for="item in optionsSlotType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8"><el-form-item label="备注" prop="memo">
              <el-input v-model="formAdd.memo" placeholder="请输入备注" />
            </el-form-item></el-col>
          </el-row>
        </el-card>
        <el-card class="box-card">
          <el-row :gutter="20">
            <el-col :span="8" :offset="16"><el-form-item size="large">
              <div class="btn-warpper">
                <el-button type="danger" @click="handleCancelAdd">取消</el-button>
                <el-button type="primary" @click="handleSubmitAdd">立即保存</el-button>
              </div>
            </el-form-item></el-col>
          </el-row>
        </el-card>

      </el-form>
    </el-dialog>
    <!--修改信息模态窗-->
    <el-dialog
      title="编辑"
      width="80%"
      :visible.sync="dialogVisibleEdit"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <template>
        <div class="handleFormEdit">
          <el-form
            ref="FormEdit"
            label-width="80px"
            size="mini"
            :model="formEdit"
            :rules="rules"
          >
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>相关信息</span>
          </div>
          <el-row :gutter="20">
            <el-col :span="8"><el-form-item label="螺丝名称" prop="name">
              <span>{{ formEdit.name }}}</span>
            </el-form-item></el-col>
            <el-col :span="8"><el-form-item label="螺丝编码" prop="screw_id">
              <span>{{ formEdit.screw_id }}}</span>
            </el-form-item></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8"><el-form-item label="牙径" prop="diameter">
              <el-input v-model="formEdit.diameter" placeholder="请输入牙径" />
            </el-form-item></el-col>
            <el-col :span="8"><el-form-item label="长度" prop="length">
              <el-input v-model="formEdit.length" placeholder="请输入长度" />
            </el-form-item></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8"><el-form-item label="材质" prop="material">
              <el-select v-model="formEdit.material" placeholder="请选择材质">
                <el-option
                  v-for="item in optionsMaterial"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item></el-col>
            <el-col :span="8"><el-form-item label="热处理" prop="heat_treated">
              <el-select v-model="formEdit.heat_treated" placeholder="请选择热处理">
                <el-option
                  v-for="item in optionsHeatTreated"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8"><el-form-item label="螺丝头型" prop="head_type">
              <el-select v-model="formEdit.head_type" placeholder="请选择螺丝头型">
                <el-option
                  v-for="item in optionsHeadType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item></el-col>
            <el-col :span="8"><el-form-item label="螺丝牙型" prop="tooth_type">
              <el-select v-model="formEdit.tooth_type" placeholder="请选择螺丝牙型">
                <el-option
                  v-for="item in optionsToothType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8"><el-form-item label="表面处理" prop="finish">
              <el-select v-model="formEdit.finish" placeholder="请选择表面处理">
                <el-option
                  v-for="item in optionsFinish"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item></el-col>
            <el-col :span="8"><el-form-item label="开槽类型" prop="slot_type">
              <el-select v-model="formEdit.slot_type" placeholder="请选择开槽类型">
                <el-option
                  v-for="item in optionsSlotType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8"><el-form-item label="备注" prop="memo">
              <el-input v-model="formEdit.memo" placeholder="请输入备注" />
            </el-form-item></el-col>
          </el-row>
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

    <!--页脚-->
    <div class="tableFoots">
      <center>
        <el-pagination background layout="total, prev, pager, next, jumper" :total="totalNum" :page-size="pageSize" @current-change="handleCurrentChange" />
      </center>
    </div>
    <!--<div class="photo-container">-->
      <!--<img src="http://ut3s2.oss-cn-beijing.aliyuncs.com/2021%2F11%2F16%2F2021111683878c91171338902e0fe0fb97a8c47a.png" />-->
    <!--</div>-->
  </div>

</template>

<script>
import { 
  getScrew, 
  createScrew, 
  updateScrew, 
  importScrew } from '@/api/bom/standardlabrary/screw/manage'
import moment from 'moment'
export default {
  name: 'screw-container',
  data() {
    return {
      DataList: [],
      tableLoading: false,
      totalNum: 0,
      selectNum: 0,
      pageSize: 30,
      checkList: [],
      params: {
        page: 1,
        allSelectTag: 0
      },
      dialogVisibleAdd: false,
      dialogVisibleEdit: false,
      formAdd: {},
      formEdit: {},
      optionsMaterial: [
        { value: 'CS',  label: '碳钢' },
        { value: 'SS',  label: '不锈钢' },        
        { value: 'BR',  label: '铜质' }
      ],
      optionsHeatTreated: [
        { value: 'NT',  label: '正火' },
        { value: 'CA',  label: '退火' },        
        { value: 'SHT',  label: '固溶热' },
        { value: 'SS',  label: '固溶' },
        { value: 'QT',  label: '淬火' },
        { value: 'B',  label: '钎焊' }
      ],
      optionsHeadType: [
        { value: 'B',  label: '球面圆柱B头' },
        { value: 'K',  label: '平K头' },        
        { value: 'C',  label: '圆柱C头' },
        { value: 'F',  label: '沉头' },
        { value: 'H',  label: '六角头' },
        { value: 'HW', label: '六角头带垫圈' },
        { value: 'O',  label: '半沉O头' },
        { value: 'P',  label: '平元P头' },
        { value: 'R',  label: '半元R头' },
        { value: 'PW', label: '平元头带垫圈' },
        { value: 'T',  label: '大扁T头' },
        { value: 'V',  label: '蘑菇头' },
        { value: 'TW',  label: '伞头' },
      ],
      optionsToothType: [
        { value: 'A', label: '自攻尖尾疏A牙' },
        { value: 'AB', label: '自攻尖尾密AB牙' },
        { value: 'B', label: '自攻平尾疏B牙' },
        { value: 'C', label: '自攻平尾密C牙' },
        { value: 'P', label: '双牙丝P牙' },
        { value: 'HL', label: '高低HL牙' },
        { value: 'U', label: '玻璃牙纹U牙' },
        { value: 'T', label: '自攻平尾切脚T牙' },
        { value: 'AT', label: '自攻尖尾切脚AT牙' },
        { value: 'M', label: '机械牙M牙' },
        { value: 'BBT', label: 'B型三角牙' },
        { value: 'CCT', label: 'C型三角牙' },
        { value: 'PTT', label: 'P型三角牙' },
        { value: 'STT', label: 'S型三角牙' }
      ],
      optionsFinish: [
        { value: 'DAC', label:  '达克罗' },
        { value: 'ZU', label:  '蓝锌' },
        { value: 'ZB', label:  '黑锌' },
        { value: 'ZC', label:  '五彩锌' },
        { value: 'ZI', label:  '白锌' },
        { value: 'BL', label:  '氧化黑色' },
        { value: 'GD', label:  '氧化金色' },
        { value: 'RU', label:  '红铜' },
        { value: 'YU', label:  '黄铜' },
        { value: 'CN', label:  '镀铜底镍' },
        { value: 'DT', label:  '哑锡' },
        { value: 'TP', label:  '锡铅合金' },
        { value: 'SA', label:  '沙阳极' },
        { value: 'NI', label:  '亮镍' },
        { value: 'EN', label:  '无电解镍' },
        { value: 'CR', label:  '亮铬' },
        { value: 'ET', label:  '亮锡' },
        { value: 'PS', label:  '钝化' },
        { value: 'AU', label:  '镀金' },
        { value: 'AG', label:  '镀银' },
        { value: 'TI', label:  '镀钛' },
        { value: 'ZF', label:  '镀镉' },
        { value: 'CH', label:  '铬酸盐' },
        { value: 'X',  label: '素材' },
        { value: 'EF', label:  '电泳漆'},
        { value: 'OT', label:  '其他'}
      ],
      optionsSlotType: [
        { value: 'CR', label: '十字槽' },
        { value: 'ST', label: '一字槽' },
        { value: 'TR', label: '三角槽' },
        { value: 'SQ', label: '内方槽' },
        { value: 'T', label: '菊花槽' },
        { value: 'HS', label: '内六角' },
        { value: 'PZ', label: '米字槽' },
        { value: 'CS', label: '十一槽' },
        { value: 'Y', label: 'Y型槽' },
        { value: 'H', label: '工字槽' },
        { value: 'L', label: '止退花齿' }
      ],
      optionsInitialParts: [],
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    // 获取列表
    fetchData() {
      // console.log('我开始运行了')
      console.log(this.params)
      this.tableLoading = true
      // console.log(this.params.create_time)
      if (typeof (this.params.create_time) !== 'undefined') {
        if (this.params.create_time.length === 2) {
          this.params.create_time_after = moment.parseZone(this.params.create_time[0]).local().format('YYYY-MM-DD HH:MM:SS')
          this.params.create_time_before = moment.parseZone(this.params.create_time[1]).local().format('YYYY-MM-DD HH:MM:SS')
        }
      }
      getScrew(this.params).then(
        res => {
          this.DataList = res.data.results
          this.totalNum = res.data.count
          this.tableLoading = false
          console.log(res.data.results)
        }
      ).catch(
        (error) => {
          this.$notify({
            title: '更新错误',
            message: error.data,
            type: 'error',
            duration: 0
          })
        }
      )
    },
    // 跳转页面
    handleCurrentChange(val) {
      this.params.page = val
      this.fetchData()
    },
    // 添加
    add() {
      this.dialogVisibleAdd = true
    },
    // 提交添加
    handleSubmitAdd() {
      console.log(this.formAdd)
      createScrew(this.formAdd).then(
        () => {
          this.fetchData()
          this.handleCancelAdd()
        }
      ).catch(
        (error) => {
          this.$notify({
            title: '创建错误',
            message: error.data,
            type: 'error',
            duration: 0
          })
        }
      )
    },
    // 关闭添加界面
    handleCancelAdd() {
      this.dialogVisibleAdd = false
      this.$refs.handleFormAdd.resetFields()
    },
    // 编辑
    handleEdit(values) {
      console.log(values)
      this.formEdit = { ...values }
      this.formEdit.creator = this.formEdit.creator.id
      this.formEdit.head_type = this.formEdit.head_type.id
      this.formEdit.tooth_type = this.formEdit.tooth_type.id
      this.formEdit.finish = this.formEdit.finish.id
      this.formEdit.slot_type = this.formEdit.slot_type.id
      this.formEdit.material = this.formEdit.material.id
      this.dialogVisibleEdit = true
      if (this.formEdit.heat_treated != "") {
        this.formEdit.heat_treated = this.formEdit.heat_treated.id
      }
      this.formEdit.order_status = this.formEdit.order_status.id
      this.formEdit.mistake_tag = this.formEdit.mistake_tag.id
      this.formEdit.process_tag = this.formEdit.process_tag.id

      delete this.formEdit.initial_parts
    },
    // 提交编辑完成的数据
    handleSubmitEdit() {
      this.$refs.FormEdit.validate(valid => {
        if (!valid) {
          return
        }
        const { id, ...data } = this.formEdit
        console.log(data)
        updateScrew(id, data).then(
          () => {
            this.dialogVisibleEdit = false
            this.fetchData()
          }).catch(
          (error) => {
            this.$notify({
              title: '更新错误',
              message: error.data,
              type: 'error',
              duration: 0
            })
          }
        )
      })
    },
    // 关闭修改界面
    handleCancelEdit() {
      this.dialogVisibleEdit = false
      this.$refs.FormEdit.resetFields()
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
    // 审核单据
    handleCheck() {
      this.tableLoading = true
      if (this.params.allSelectTag === 1) {
        checkWorkOrder(this.params).then(
          res => {
            if (res.data.successful !== 0) {
              this.$notify({
                title: '审核成功',
                message: `审核成功条数：${res.data.successful}`,
                type: 'success',
                offset: 70,
                duration: 3000
              })
            }
            if (res.data.false !== 0) {
              this.$notify({
                title: '审核失败',
                message: `审核失败条数：${res.data.false}`,
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
        checkWorkOrder(this.params).then(
          res => {
            if (res.data.successful !== 0) {
              this.$notify({
                title: '审核成功',
                message: `审核成功条数：${res.data.successful}`,
                type: 'success',
                offset: 70,
                duration: 3000
              })
            }
            if (res.data.false !== 0) {
              this.$notify({
                title: '审核失败',
                message: `审核失败条数：${res.data.false}`,
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
    handleReject() {
      const h = this.$createElement
      let resultMessage, resultType
      this.$msgbox({
        title: '取消工单',
        message: h('p', null, [
          h('h3', { style: 'color: teal' }, '特别注意：'),
          h('hr', null, ''),
          h('span', null, '取消工单即为此源单号的开票申请彻底取消！无法再次用此源单号创建开票申请，请慎重选择！'),
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
              rejectWorkOrder(this.params).then(
                res => {
                  if (res.data.successful !== 0) {
                    this.$notify({
                      title: '取消成功',
                      message: `取消成功条数：${res.data.successful}`,
                      type: 'success',
                      offset: 70,
                      duration: 3000
                    })
                  }
                  if (res.data.false !== 0) {
                    this.$notify({
                      title: '取消失败',
                      message: `取消败条数：${res.data.false}`,
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
                  message: '未选择订单无法取消',
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
              rejectWorkOrder(this.params).then(
                res => {
                  if (res.data.successful !== 0) {
                    this.$notify({
                      title: '取消成功',
                      message: `取消成功条数：${res.data.successful}`,
                      type: 'success',
                      offset: 70,
                      duration: 3000
                    })
                  }
                  if (res.data.false !== 0) {
                    this.$notify({
                      title: '取消失败',
                      message: `取消败条数：${res.data.false}`,
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
        // 导入
    importExcel() {
      const h = this.$createElement
      this.$msgbox({
        title: '导入 Excel',
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
            importScrew(importformData, config).then(
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
          console.log(error)
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
            exportWorkOrder(this.params).then(
              res => {
                res.data = res.data.map(item => {
                  return {
                    螺丝名称: item.name,
                    螺丝编码: item.screw_id,
                    材质: item.material.name,
                    牙径: item.diameter,
                    长度: item.length,
                    螺丝头型: item.head_type.name,
                    螺丝牙型: item.tooth_type.name,
                    热处理: item.heat_treated.name,
                    表面处理: item.finish.name,
                    初始物料: item.initial_parts.name,
                    开槽类型: item.slot_type.name,
                    特殊备注: item.memo,
                    是否返回: item.is_return,
                    返回单号: item.return_express_id,
                    备注: item.memo,
                    状态: item.order_status.name,
                    错误原因: item.mistake_tag.name,
                    处理标签: item.process_tag.name,
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
    // 重置筛选
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
