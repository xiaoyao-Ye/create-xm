<template>
	<div class="app-container">
		<upload-excel-component @success="handleSuccess" @error="error" />
		<el-table :data="tableData" border highlight-current-row style="width: 100%; margin-top: 20px">
			<el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
		</el-table>
	</div>
</template>

<script>
import UploadExcelComponent from "@/components/UploadExcel/index.vue";

export default {
	name: "UploadExcel",
	components: { UploadExcelComponent },
	data() {
		return {
			tableData: [],
			tableHeader: []
		};
	},
	methods: {
		error(e) {
			console.log({ e });
		},
		beforeUpload(file) {
			const isLt1M = file.size / 1024 / 1024 < 1;

			if (isLt1M) {
				return true;
			}

			this.$message({
				message: "Please do not upload files larger than 1m in size.",
				type: "warning"
			});
			return false;
		},
		handleSuccess({ results, header }) {
			// handleSuccess(data) {
			console.log({ results });
			console.log({ header });
			this.tableData = results;
			this.tableHeader = header;
		}
	}
};
</script>
