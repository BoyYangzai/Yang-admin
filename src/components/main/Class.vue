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
import { getrequest } from "../../network/login/login";
let value = ref(5);
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

let tableData: any = ref([]);

// 信息存储
getrequest("https://yakui114514.xyz/admin/getall").then((res) => {
  tableData.value = res.data.data.splice(0, 31);
});
</script>

<style lang="less" scoped>
.class {
  width: 99.8%;
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
