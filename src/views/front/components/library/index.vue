<template>
    <div class="page">
        <!-- <div class='navBanner'></div> -->
        <div class='create'>
            <el-button type="info" @click="createFormVisible=true">创建歌单</el-button>
        </div>
        <div class="songLists">
            <div class="songList" :key="songList.id" v-for="songList in songLists">
                <SongListRec :listName="songList.title" 
                            :picSrc="songListPic(songList.pic)"
                            :id="songList.id" />
            </div>
        </div>

        <el-dialog width="30%" title="创建歌单" :visible.sync="createFormVisible">
            <el-form :model="form">
                <el-form-item label="歌单名称" :label-width="formLabelWidth">
                <el-input  v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="createFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="createForm()">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import SongListRec from "../../components/songList/rectangle";
import { MessageBox, Message } from "element-ui";
    export default{
        name: 'Library',
        components:{
            SongListRec
        },
        data(){
            return{
                userId:'',
                songLists:[],
                createFormVisible:false,
                formLabelWidth:'80px',
                form:{
                    name:''
                }
            }
        },
        mounted(){
            this.userId = sessionStorage.getItem('userId');
            console.log(this.userId);
            this.getSongList();
        },
        methods:{
            getSongList(){
                this.$axios
                    .get(`/songList/detail-userId/${this.userId}`)
                    .then(response =>{
                        // console.log(response);
                        this.songLists=response.data.data;
                    })
                    .catch(failResponse =>{
                    })
            },
            songListPic(pic){
                if(pic==null){
                    return 'http://p2.music.126.net/lGKTPIR0dvEt09OMlzflxA==/93458488376709.jpg';
                }else{
                    // console.log(pic);
                    return pic;
                }
            
            },
            createForm(){
                this.createFormVisible = false;
                this.$axios
                    .post('/songList/add',{
                        title:this.form.name,
                        userId:this.userId
                    })
                    .then(response =>{
                        if(response.data.msg=="添加成功"){
                            Message.success("添加成功");
                            this.getSongList();
                        }else{
                            Message.error("添加失败");
                        }
                    })
                    .catch(failResponse =>{
                        Message.error("添加失败");
                    })
                    }
        }
    }
</script>

<style scoped>
.page{
    background:#202020;

    height:100%;
}

.navBanner{
    height:40px;
}

.songLists{
    padding-top: 20px;
}

.songList{
    float:left;
    padding-left:20px;
    padding-top:10px;
}

.create{
    padding-top:10px;
    padding-right:10px;
    text-align:right;
    
}


.songList{
    padding-top:10px;
}


</style>