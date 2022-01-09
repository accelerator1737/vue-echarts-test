<template>
    <div id="app">
        <el-table
                :data="anime"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="animeId"
                    label="动漫编号"
                    width="150">
            </el-table-column>
            <el-table-column
                    fixed
                    prop="animeName"
                    label="动漫名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="picture"
                    label="动漫封面"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="createTime"
                    label="创建时间"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="updateTime"
                    label="修改时间"
                    width="300">
            </el-table-column>
            <el-table-column
                    prop="isDel"
                    label="是否删除"
                    width="120">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="dialogVisible = true">添加</el-button>
                    <el-button
                            size="mini"
                            @click="update(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="deleteRow(scope.$index, anime)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%">
            <el-form ref="form" :model="anime" label-width="80px">
                <el-form-item label="动漫名称">
                    <el-input width="80px"  v-model="anime.animeName"></el-input>
                </el-form-item>

                <el-form-item label="创建时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="anime.createTime" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>

                <el-form-item label="修改时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="anime.updateTime" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>

                <el-form-item label="是否删除">
                    <el-select v-model="anime.isDel" placeholder="请选择是否删除">
                        <el-option label="未删除" value="0"></el-option>
                        <el-option label="已删除" value="1"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="close()">取 消</el-button>
                <el-button v-show="showAdd" type="primary" @click="add()">确 定</el-button>
                <el-button v-show="showUpdate" type="primary" @click="alter()">修改</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
    export default {
        name: "anime",
        data() {
            return {
                showAdd:true,
                showUpdate:false,
                dialogVisible: false,
                anime: [{
                    animeId:1,
                    animeName:'动漫1',
                    picture:'',
                    createTime:'2018/10/10',
                    updateTime:'2018/10/10',
                    isDel:0
                }, {
                    animeId:2,
                    animeName:'动漫2',
                    picture:'',
                    createTime:'2018/10/10',
                    updateTime:'2018/10/10',
                    isDel:0
                }, {
                    animeId:3,
                    animeName:'动漫3',
                    picture:'',
                    createTime:'2018/10/10',
                    updateTime:'2018/10/10',
                    isDel:0
                }, {
                    animeId:4,
                    animeName:'动漫4',
                    picture:'',
                    createTime:'2018/10/10',
                    updateTime:'2018/10/10',
                    isDel:0
                }]
            }
        },
        methods: {
            close(){
                this.dialogVisible = false;
                this.showAdd=true;
                this.showUpdate=false;
            },
            update(index, row) {
                console.log(index, row);
                this.anime = row;
                this.dialogVisible = true;
                this.showAdd=false;
                this.showUpdate=true;

            },
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            add(){
                var content={
                    animeId:this.anime.length+1,
                    animeName:this.anime.animeName,
                    picture:'',
                    createTime:this.anime.createTime.toLocaleDateString(),
                    updateTime:this.anime.updateTime.toLocaleDateString(),
                    isDel:this.anime.isDel
                };
                this.anime.push(content);
                this.dialogVisible = false ;
            },
            alter(){
                this.dialogVisible = false;
                this.showAdd=true;
                this.showUpdate=false;

            }
        }
    }
</script>

<style scoped>

</style>