<template>
  <div class="class">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>班级信息</span>
        </div>
      </template>
      <el-card>
        <el-descriptions title="" :column="5" border direction="vertical">
          <el-descriptions-item
            label="学院"
            align="center"
            label-class-name="my-label"
            class-name="my-content"
            width="250px"
            >计算机科学与技术学院</el-descriptions-item
          >
          <el-descriptions-item label="专业" align="center" width="250px"
            >数据科学与大数据技术</el-descriptions-item
          >
          <el-descriptions-item label="班级" align="center"
            >1班</el-descriptions-item
          >
          <el-descriptions-item label="班主任" align="center">
            <el-tag size="small">闫秋月</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="班级评分" align="center">
            <ul>
              <li
                class="rate"
                v-for="(item, index) in value"
                style="display: inline"
              >
                <svg
                  style="color: orange"
                  class="icon"
                  width="20"
                  height="20"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M283.84 867.84L512 747.776l228.16 119.936a6.4 6.4 0 009.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 00-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 00-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 00-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 009.28 6.72z"
                  ></path>
                </svg>
              </li>
              <span style="font-weight: 700; color: orange">{{ value }}分</span>
            </ul>
          </el-descriptions-item>
        </el-descriptions>
        <el-table
          ref="singleTableRef"
          :data="tableData"
          highlight-current-row
          style="width: 100%"
          @current-change="handleCurrentChange"
        >
          <el-table-column type="index" width="50" />
          <el-table-column property="studentId" label="学号" width="120" />
          <el-table-column property="name" label="姓名" width="120" />
          <el-table-column property="phone" label="手机号" width="180" />

          <el-table-column property="address" label="家庭住址" />
        </el-table>
      </el-card>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from "vue";
import type { ElTable } from "element-plus";
import axios from "axios";
let value = ref(5);
console.log(value.value);
interface User {
  studentId: string;
  name: string;
  address: string;
}

const currentRow = ref();
const singleTableRef = ref<InstanceType<typeof ElTable>>();

const setCurrent = (row?: User) => {
  singleTableRef.value!.setCurrentRow(row);
};
const handleCurrentChange = (val: User | undefined) => {
  currentRow.value = val;
};
let mock= [
    {
      "studentId": "08213101",
      "name": "Yang",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "甘肃省 平凉市 泾川县",
      "phone": "15352070721"
    },
    {
      "studentId": "08213375",
      "name": "胡霞",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "吉林省 延边朝鲜族自治州 延吉市",
      "phone": "18684637067"
    },
    {
      "studentId": "08213662",
      "name": "姚明",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "甘肃省 平凉市 静宁县",
      "phone": "18638347244"
    },
    {
      "studentId": "08213786",
      "name": "叶超",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "广东省 江门市 新会区",
      "phone": "18166351521"
    },
    {
      "studentId": "08213639",
      "name": "董平",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "江西省 九江市 德安县",
      "phone": "18194406141"
    },
    {
      "studentId": "08213220",
      "name": "袁敏",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "安徽省 马鞍山市 当涂县",
      "phone": "18113527552"
    },
    {
      "studentId": "08213413",
      "name": "唐娜",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "香港特别行政区 香港岛 湾仔",
      "phone": "18176955509"
    },
    {
      "studentId": "08213189",
      "name": "谢平",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "辽宁省 本溪市 平山区",
      "phone": "18126316039"
    },
    {
      "studentId": "08213644",
      "name": "杜娟",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "重庆 重庆市 沙坪坝区",
      "phone": "18137581803"
    },
    {
      "studentId": "08213815",
      "name": "孟艳",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "上海 上海市 静安区",
      "phone": "18133435330"
    },
    {
      "studentId": "08213239",
      "name": "陈秀兰",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "浙江省 舟山市 嵊泗县",
      "phone": "18611366251"
    },
    {
      "studentId": "08213204",
      "name": "赵艳",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "安徽省 安庆市 岳西县",
      "phone": "18151459281"
    },
    {
      "studentId": "08213918",
      "name": "董娟",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "黑龙江省 大庆市 大同区",
      "phone": "18690644431"
    },
    {
      "studentId": "08213154",
      "name": "杜刚",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "河北省 秦皇岛市 卢龙县",
      "phone": "18168878877"
    },
    {
      "studentId": "08213131",
      "name": "武娟",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "广东省 清远市 英德市",
      "phone": "18170824774"
    },
    {
      "studentId": "08213606",
      "name": "白磊",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "新疆维吾尔自治区 昌吉回族自治州 奇台县",
      "phone": "18125225962"
    },
    {
      "studentId": "08213036",
      "name": "锺静",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "福建省 厦门市 其它区",
      "phone": "18672360833"
    },
    {
      "studentId": "08213411",
      "name": "吴平",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "贵州省 遵义市 其它区",
      "phone": "18622544440"
    },
    {
      "studentId": "08213723",
      "name": "黎霞",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "吉林省 延边朝鲜族自治州 珲春市",
      "phone": "18684135458"
    },
    {
      "studentId": "08213638",
      "name": "薛敏",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "山西省 长治市 襄垣县",
      "phone": "18682755732"
    },
    {
      "studentId": "08213131",
      "name": "乔勇",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "河北省 廊坊市 香河县",
      "phone": "18605324386"
    },
    {
      "studentId": "08213605",
      "name": "毛芳",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "江西省 赣州市 全南县",
      "phone": "19847623394"
    },
    {
      "studentId": "08213775",
      "name": "白洋",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "湖南省 张家界市 武陵源区",
      "phone": "18189643462"
    },
    {
      "studentId": "08213678",
      "name": "阎桂英",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "湖北省 襄阳市 南漳县",
      "phone": "18125813315"
    },
    {
      "studentId": "08213548",
      "name": "谢超",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "河北省 承德市 双滦区",
      "phone": "18139434161"
    },
    {
      "studentId": "08213223",
      "name": "常涛",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "新疆维吾尔自治区 克孜勒苏柯尔克孜自治州 乌恰县",
      "phone": "18182823680"
    },
    {
      "studentId": "08213490",
      "name": "康勇",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "湖北省 孝感市 应城市",
      "phone": "18132287796"
    },
    {
      "studentId": "08213493",
      "name": "曹洋",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "湖南省 岳阳市 君山区",
      "phone": "19824733830"
    },
    {
      "studentId": "08213970",
      "name": "袁洋",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "重庆 重庆市 巴南区",
      "phone": "18673832736"
    },
    {
      "studentId": "08213838",
      "name": "叶伟",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "台湾 嘉义市 东区",
      "phone": "13196294715"
    },
    {
      "studentId": "08213107",
      "name": "熊霞",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "宁夏回族自治区 固原市 彭阳县",
      "phone": "18633427834"
    },
    {
      "studentId": "08213604",
      "name": "戴桂英",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "吉林省 辽源市 东丰县",
      "phone": "18133672851"
    },
    {
      "studentId": "08213241",
      "name": "郭敏",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "广东省 肇庆市 怀集县",
      "phone": "18653358637"
    },
    {
      "studentId": "08213900",
      "name": "许敏",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "西藏自治区 拉萨市 林周县",
      "phone": "18641838688"
    },
    {
      "studentId": "08213738",
      "name": "赖秀兰",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "澳门特别行政区 澳门半岛 -",
      "phone": "18122239226"
    },
    {
      "studentId": "08213069",
      "name": "金丽",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "内蒙古自治区 巴彦淖尔市 五原县",
      "phone": "18160515221"
    },
    {
      "studentId": "08213568",
      "name": "白芳",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "山东省 德州市 德城区",
      "phone": "18138830795"
    },
    {
      "studentId": "08213910",
      "name": "胡秀英",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "福建省 三明市 泰宁县",
      "phone": "18145538792"
    },
    {
      "studentId": "08213348",
      "name": "锺艳",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "贵州省 遵义市 红花岗区",
      "phone": "19834324564"
    },
    {
      "studentId": "08213565",
      "name": "张明",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "江西省 鹰潭市 贵溪市",
      "phone": "18654830324"
    },
    {
      "studentId": "08213842",
      "name": "沈娟",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "台湾 连江县 莒光乡",
      "phone": "13124487179"
    },
    {
      "studentId": "08213947",
      "name": "李娜",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "宁夏回族自治区 中卫市 其它区",
      "phone": "18151255542"
    },
    {
      "studentId": "08213529",
      "name": "汤勇",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "广东省 揭阳市 惠来县",
      "phone": "18156010868"
    },
    {
      "studentId": "08213931",
      "name": "邓明",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "宁夏回族自治区 吴忠市 利通区",
      "phone": "18147679294"
    },
    {
      "studentId": "08213687",
      "name": "万伟",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "浙江省 衢州市 开化县",
      "phone": "18679384677"
    },
    {
      "studentId": "08213431",
      "name": "罗静",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "浙江省 金华市 磐安县",
      "phone": "18660346043"
    },
    {
      "studentId": "08213532",
      "name": "孟敏",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "贵州省 六盘水市 六枝特区",
      "phone": "19831873283"
    },
    {
      "studentId": "08213048",
      "name": "田娜",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "吉林省 吉林市 昌邑区",
      "phone": "18106833204"
    },
    {
      "studentId": "08213890",
      "name": "邵明",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "广东省 茂名市 电白县",
      "phone": "13286229975"
    },
    {
      "studentId": "08213568",
      "name": "万洋",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "山东省 潍坊市 诸城市",
      "phone": "19852818818"
    },
    {
      "studentId": "08213514",
      "name": "廖军",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "香港特别行政区 九龙 油尖旺区",
      "phone": "19876608251"
    },
    {
      "studentId": "08213650",
      "name": "夏磊",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "天津 天津市 东丽区",
      "phone": "18199311343"
    },
    {
      "studentId": "08213207",
      "name": "康磊",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "广东省 中山市 -",
      "phone": "18184813572"
    },
    {
      "studentId": "08213705",
      "name": "叶秀英",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "贵州省 安顺市 镇宁布依族苗族自治县",
      "phone": "13552761211"
    },
    {
      "studentId": "08213266",
      "name": "崔秀兰",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "西藏自治区 山南地区 隆子县",
      "phone": "18188741540"
    },
    {
      "studentId": "08213392",
      "name": "贾刚",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "甘肃省 定西市 通渭县",
      "phone": "18135285378"
    },
    {
      "studentId": "08213240",
      "name": "贾勇",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "陕西省 渭南市 潼关县",
      "phone": "18166460160"
    },
    {
      "studentId": "08213566",
      "name": "孔艳",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "甘肃省 张掖市 肃南裕固族自治县",
      "phone": "18130246067"
    },
    {
      "studentId": "08213184",
      "name": "蒋娜",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "甘肃省 平凉市 华亭县",
      "phone": "18173196557"
    },
    {
      "studentId": "08213563",
      "name": "赖军",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "内蒙古自治区 锡林郭勒盟 多伦县",
      "phone": "18171541777"
    },
    {
      "studentId": "08213094",
      "name": "万秀兰",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "甘肃省 平凉市 华亭县",
      "phone": "18674795593"
    },
    {
      "studentId": "08213373",
      "name": "吴涛",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "贵州省 毕节市 赫章县",
      "phone": "18124826456"
    },
    {
      "studentId": "08213087",
      "name": "秦刚",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "山西省 朔州市 平鲁区",
      "phone": "18117383713"
    },
    {
      "studentId": "08213062",
      "name": "廖娟",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "北京 北京市 大兴区",
      "phone": "18140175653"
    },
    {
      "studentId": "08213149",
      "name": "锺静",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "江苏省 镇江市 句容市",
      "phone": "18172552672"
    },
    {
      "studentId": "08213918",
      "name": "梁秀英",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "海外 海外 -",
      "phone": "18681362557"
    },
    {
      "studentId": "08213160",
      "name": "薛艳",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "吉林省 辽源市 东丰县",
      "phone": "18128352107"
    },
    {
      "studentId": "08213775",
      "name": "潘刚",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "澳门特别行政区 澳门半岛 -",
      "phone": "18111762141"
    },
    {
      "studentId": "08213387",
      "name": "文洋",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "吉林省 白城市 洮南市",
      "phone": "18680323742"
    },
    {
      "studentId": "08213339",
      "name": "曾洋",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "湖南省 湘潭市 岳塘区",
      "phone": "13581295074"
    },
    {
      "studentId": "08213979",
      "name": "邓涛",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "黑龙江省 牡丹江市 东安区",
      "phone": "18107955666"
    },
    {
      "studentId": "08213621",
      "name": "赖磊",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "山西省 大同市 其它区",
      "phone": "19804108233"
    },
    {
      "studentId": "08213736",
      "name": "杨洋",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "重庆 重庆市 巴南区",
      "phone": "18144513655"
    },
    {
      "studentId": "08213252",
      "name": "任磊",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "西藏自治区 昌都地区 江达县",
      "phone": "13785842267"
    },
    {
      "studentId": "08213076",
      "name": "冯霞",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "青海省 海北藏族自治州 海晏县",
      "phone": "18123513794"
    },
    {
      "studentId": "08213224",
      "name": "汪秀英",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "安徽省 黄山市 休宁县",
      "phone": "19872342451"
    },
    {
      "studentId": "08213771",
      "name": "曹敏",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "云南省 玉溪市 易门县",
      "phone": "18133013733"
    },
    {
      "studentId": "08213078",
      "name": "叶磊",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "江西省 萍乡市 安源区",
      "phone": "18618376786"
    },
    {
      "studentId": "08213268",
      "name": "顾霞",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "福建省 三明市 宁化县",
      "phone": "18186367654"
    },
    {
      "studentId": "08213361",
      "name": "方杰",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "青海省 海南藏族自治州 其它区",
      "phone": "18104242027"
    },
    {
      "studentId": "08213714",
      "name": "邱敏",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "广西壮族自治区 来宾市 象州县",
      "phone": "18631167831"
    },
    {
      "studentId": "08213863",
      "name": "尹涛",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "河北省 邯郸市 邱县",
      "phone": "18651494813"
    },
    {
      "studentId": "08213312",
      "name": "曾霞",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "广东省 肇庆市 封开县",
      "phone": "18613926322"
    },
    {
      "studentId": "08213924",
      "name": "段刚",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "安徽省 蚌埠市 其它区",
      "phone": "18631928482"
    },
    {
      "studentId": "08213998",
      "name": "龚丽",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "内蒙古自治区 鄂尔多斯市 鄂托克旗",
      "phone": "18122512499"
    },
    {
      "studentId": "08213490",
      "name": "唐勇",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "新疆维吾尔自治区 伊犁哈萨克自治州 察布查尔锡伯自治县",
      "phone": "18138231957"
    },
    {
      "studentId": "08213670",
      "name": "曾秀兰",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "河北省 保定市 南市区",
      "phone": "18681261338"
    },
    {
      "studentId": "08213597",
      "name": "李军",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "上海 上海市 杨浦区",
      "phone": "18197846671"
    },
    {
      "studentId": "08213573",
      "name": "锺秀英",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "江西省 上饶市 横峰县",
      "phone": "18164839758"
    },
    {
      "studentId": "08213070",
      "name": "孙秀英",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "江西省 宜春市 靖安县",
      "phone": "18198032854"
    },
    {
      "studentId": "08213345",
      "name": "马娟",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "甘肃省 武威市 古浪县",
      "phone": "18131157078"
    },
    {
      "studentId": "08213209",
      "name": "曹伟",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "福建省 宁德市 霞浦县",
      "phone": "18648724485"
    },
    {
      "studentId": "08213727",
      "name": "余娜",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "宁夏回族自治区 吴忠市 盐池县",
      "phone": "18621881103"
    },
    {
      "studentId": "08213123",
      "name": "朱磊",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "重庆 重庆市 江北区",
      "phone": "18173591772"
    },
    {
      "studentId": "08213766",
      "name": "彭桂英",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "河南省 安阳市 龙安区",
      "phone": "18692441356"
    },
    {
      "studentId": "08213607",
      "name": "周丽",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "黑龙江省 双鸭山市 尖山区",
      "phone": "18125399341"
    },
    {
      "studentId": "08213001",
      "name": "张洋",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "浙江省 金华市 兰溪市",
      "phone": "18136772556"
    },
    {
      "studentId": "08213283",
      "name": "沈涛",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "贵州省 毕节市 威宁彝族回族苗族自治县",
      "phone": "13138286139"
    },
    {
      "studentId": "08213191",
      "name": "夏明",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "新疆维吾尔自治区 吐鲁番地区 吐鲁番市",
      "phone": "18119127951"
    },
    {
      "studentId": "08213147",
      "name": "阎娜",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "贵州省 毕节市 纳雍县",
      "phone": "19846243777"
    },
    {
      "studentId": "08213764",
      "name": "孟静",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "新疆维吾尔自治区 昌吉回族自治州 呼图壁县",
      "phone": "18655245862"
    },
    {
      "studentId": "08213186",
      "name": "崔平",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "甘肃省 张掖市 高台县",
      "phone": "18637668727"
    },
    {
      "studentId": "08213993",
      "name": "蔡刚",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "山西省 朔州市 怀仁县",
      "phone": "18182183445"
    },
    {
      "studentId": "08213091",
      "name": "潘伟",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "辽宁省 葫芦岛市 绥中县",
      "phone": "13564477572"
    },
    {
      "studentId": "08213362",
      "name": "周桂英",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "安徽省 滁州市 定远县",
      "phone": "18666767983"
    },
    {
      "studentId": "08213106",
      "name": "韩静",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "宁夏回族自治区 吴忠市 盐池县",
      "phone": "19837526462"
    },
    {
      "studentId": "08213704",
      "name": "崔娜",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "山西省 运城市 绛县",
      "phone": "18164121741"
    },
    {
      "studentId": "08213551",
      "name": "邵明",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "安徽省 铜陵市 铜陵县",
      "phone": "18638717048"
    },
    {
      "studentId": "08213380",
      "name": "谢明",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "吉林省 吉林市 蛟河市",
      "phone": "13778468613"
    },
    {
      "studentId": "08213393",
      "name": "薛刚",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "吉林省 四平市 公主岭市",
      "phone": "18654754241"
    },
    {
      "studentId": "08213703",
      "name": "石娜",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "上海 上海市 闸北区",
      "phone": "19842673797"
    },
    {
      "studentId": "08213789",
      "name": "孙平",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "安徽省 芜湖市 芜湖县",
      "phone": "18126266637"
    },
    {
      "studentId": "08213515",
      "name": "锺娜",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "浙江省 杭州市 桐庐县",
      "phone": "18664881313"
    },
    {
      "studentId": "08213436",
      "name": "陈杰",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "西藏自治区 日喀则地区 南木林县",
      "phone": "19872598368"
    },
    {
      "studentId": "08213949",
      "name": "冯强",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "内蒙古自治区 兴安盟 乌兰浩特市",
      "phone": "19828843569"
    },
    {
      "studentId": "08213710",
      "name": "贺军",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "青海省 海北藏族自治州 刚察县",
      "phone": "18140688513"
    },
    {
      "studentId": "08213310",
      "name": "蔡杰",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "湖南省 益阳市 赫山区",
      "phone": "13337949535"
    },
    {
      "studentId": "08213675",
      "name": "余敏",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "浙江省 杭州市 临安市",
      "phone": "18103952088"
    },
    {
      "studentId": "08213667",
      "name": "龚秀兰",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "浙江省 舟山市 普陀区",
      "phone": "19887857933"
    },
    {
      "studentId": "08213622",
      "name": "程勇",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "贵州省 铜仁市 思南县",
      "phone": "13267824562"
    },
    {
      "studentId": "08213786",
      "name": "锺霞",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "河北省 邯郸市 邱县",
      "phone": "18156728542"
    },
    {
      "studentId": "08213846",
      "name": "方艳",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "山东省 济宁市 嘉祥县",
      "phone": "18657632992"
    },
    {
      "studentId": "08213540",
      "name": "吴秀英",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "广西壮族自治区 玉林市 陆川县",
      "phone": "19822929981"
    },
    {
      "studentId": "08213945",
      "name": "郑桂英",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "江西省 萍乡市 莲花县",
      "phone": "18137693371"
    },
    {
      "studentId": "08213486",
      "name": "唐敏",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "福建省 漳州市 龙文区",
      "phone": "19846546148"
    },
    {
      "studentId": "08213220",
      "name": "朱超",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "安徽省 马鞍山市 博望区",
      "phone": "18134328412"
    },
    {
      "studentId": "08213163",
      "name": "江霞",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "浙江省 嘉兴市 平湖市",
      "phone": "18140216926"
    },
    {
      "studentId": "08213414",
      "name": "赵丽",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "甘肃省 平凉市 华亭县",
      "phone": "18674214535"
    },
    {
      "studentId": "08213615",
      "name": "高明",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "湖南省 湘西土家族苗族自治州 凤凰县",
      "phone": "18155620342"
    },
    {
      "studentId": "08213666",
      "name": "周军",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "海外 海外 -",
      "phone": "18627576177"
    },
    {
      "studentId": "08213880",
      "name": "石杰",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "台湾 南投县 信义乡",
      "phone": "18180993605"
    },
    {
      "studentId": "08213438",
      "name": "易静",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "广东省 潮州市 饶平县",
      "phone": "13784434928"
    },
    {
      "studentId": "08213983",
      "name": "万明",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "江西省 新余市 渝水区",
      "phone": "18173807765"
    },
    {
      "studentId": "08213921",
      "name": "史艳",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "黑龙江省 黑河市 嫩江县",
      "phone": "18121324615"
    },
    {
      "studentId": "08213916",
      "name": "杨勇",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "上海 上海市 徐汇区",
      "phone": "13456670513"
    },
    {
      "studentId": "08213533",
      "name": "吴强",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "四川省 泸州市 合江县",
      "phone": "18628797755"
    },
    {
      "studentId": "08213884",
      "name": "贺芳",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "广东省 潮州市 饶平县",
      "phone": "18125108260"
    },
    {
      "studentId": "08213460",
      "name": "袁超",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "宁夏回族自治区 固原市 泾源县",
      "phone": "18127433525"
    },
    {
      "studentId": "08213192",
      "name": "刘秀兰",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "内蒙古自治区 呼伦贝尔市 其它区",
      "phone": "18185873830"
    },
    {
      "studentId": "08213827",
      "name": "谢伟",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "甘肃省 嘉峪关市 -",
      "phone": "18173251336"
    },
    {
      "studentId": "08213574",
      "name": "董刚",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "宁夏回族自治区 固原市 隆德县",
      "phone": "18114148960"
    },
    {
      "studentId": "08213463",
      "name": "潘霞",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "海南省 三亚市 -",
      "phone": "18195551342"
    },
    {
      "studentId": "08213099",
      "name": "曾艳",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "香港特别行政区 九龙 九龙城区",
      "phone": "18628455487"
    },
    {
      "studentId": "08213646",
      "name": "戴磊",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "海南省 三亚市 -",
      "phone": "18658684133"
    },
    {
      "studentId": "08213278",
      "name": "崔丽",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "甘肃省 陇南市 礼县",
      "phone": "18128941253"
    },
    {
      "studentId": "08213840",
      "name": "邹刚",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "河北省 石家庄市 辛集市",
      "phone": "18621756266"
    },
    {
      "studentId": "08213480",
      "name": "钱霞",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "黑龙江省 鸡西市 虎林市",
      "phone": "18169245383"
    },
    {
      "studentId": "08213139",
      "name": "龙敏",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "澳门特别行政区 澳门半岛 -",
      "phone": "19877729766"
    },
    {
      "studentId": "08213431",
      "name": "胡敏",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "北京 北京市 昌平区",
      "phone": "18153894557"
    },
    {
      "studentId": "08213048",
      "name": "余芳",
      "departments": "计算机科学与技术学院",
      "major": "计算机科学与技术",
      "address": "山西省 长治市 壶关县",
      "phone": "18147724584"
    },
    {
      "studentId": "08213372",
      "name": "赵秀英",
      "departments": "计算机科学与技术学院",
      "major": "信息安全",
      "address": "陕西省 延安市 黄陵县",
      "phone": "18141818087"
    },
    {
      "studentId": "08213534",
      "name": "文刚",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "台湾 新竹县 新丰乡",
      "phone": "19864183986"
    },
    {
      "studentId": "08213761",
      "name": "雷强",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "香港特别行政区 新界 屯门区",
      "phone": "13114346916"
    },
    {
      "studentId": "08213344",
      "name": "卢明",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "山西省 晋中市 寿阳县",
      "phone": "19849472605"
    },
    {
      "studentId": "08213357",
      "name": "李娟",
      "departments": "计算机科学与技术学院",
      "major": "数据科学与大数据技术",
      "address": "甘肃省 定西市 安定区",
      "phone": "18646233156"
    },
    {
      "studentId": "08213041",
      "name": "熊艳",
      "departments": "计算机科学与技术学院",
      "major": "人工智能",
      "address": "陕西省 咸阳市 乾县",
      "phone": "18647187114"
    }
  ]
let tableData: any = ref([]);
tableData.value=mock.splice(0,31)

//信息存储
// axios.get("http://127.0.0.1:4523/mock/574487/studentinfo").then((res) => {
//   tableData.value = res.data.data.splice(0, 31);
// });
</script>

<style lang="less" scoped>
.class {
  width: 99.8%;
}

.box-card {
  width: 97%;
  margin-left: 0.5vw;
}
.card-header {
  text-align: left;
  font-size: 1vw;
  font-weight: 700;
  font-family: "黑体", Times, serif;
}
.my-label {
  background: var(--el-color-success-lighter);
}
.my-content {
  background: var(--el-color-danger-lighter);
}
.rate {
  position: relative;
  top: 0.2vw;
}

:deep(.el-card__body) {
  height: 100%;
}
:deep(.el-card__body) {
  width: 98%;
}
</style>
