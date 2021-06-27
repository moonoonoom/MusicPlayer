<template>
    <div class="page">
        <div class="info">

            <div class='pic'>
                <img class='songPic' :src="this.song.pic">
            </div> 
            <div class="infoText singerName">
                <span>{{this.song.singerName}}</span>
            </div>
            <div class="infoText songName">
                <span>{{this.song.name}}</span>
            </div>
            <div class="infoText icon">
                <i @click="showComLrc" class="el-icon-question"/>
            </div>
        </div>
        <div class="lrcShow">
            <div class="text">{{this.song.lyric}}</div>
        </div>

        <el-dialog class="commitLrc" title="歌词勘误" :visible.sync="comLrcVisible">
            <el-input 
                v-model="this.song.lyric" 
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 20}"
                />
            <div class="lrcButton">
                <el-button @click="comLrcVisible = false">取 消</el-button>
                <el-button type="primary" @click="commitNewLrc">提 交</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default{
        name: 'Song',
        data(){
            return{
                songId:'',
                song:[],
                comLrcVisible:false
            }
        },
        mounted(){
            this.getSong();
        },
        methods:{
            getSong(){
                this.songId = this.$route.query.id;
                this.$axios
                    .get(`/song/detail/${this.songId}`)
                    .then(response =>{
                        // debugger;
                        // console.log(response);
                        this.song=response.data.data;
                        //这里先这样显示，之后要改
                        this.song.lyric = this.song.lyric.replace(/\[.*\]/g, "");
                        console.log(this.song);
                        })
                    .catch(failResponse =>{
                    })
            },
            showComLrc(){
                this.comLrcVisible = true;
            },
            commitNewLrc(){

            }
        }
    }
</script>

<style scoped>
.page{
    background:#202020;

    height:100%;
}

.info{
    position: relative;
    height:45%;
}

.pic{
    float:right;
}

.songPic{
    width:300px;
    height:300px;
    object-fit: cover;
    /* border-radius: 50%; */
}

.infoText{
    color:gray;
    font-weight: bolder;
    /* float:right; */
    
    position: absolute;
    
    
}

.songName{
    bottom:-20px;
    right:300px;
    font-size:80px;
    /* bottom:0; */
    font-size:80px;
    /* position: absolute; */
    /* top:200px; */
    /* padding-left: 20px; */
    
}

.singerName{
    right:300px;
    bottom:80px;
    font-size: 50px;
}

.icon{
    font-size:30px;
    bottom:0;
    cursor: pointer;
}

.icon:hover{
    color:white;
}

.lrcShow{
    color:gray;
    height:55%;
}

.text{
    height:100%;
    width: 100%;
    white-space: pre-wrap;
    overflow-y: scroll;
}

 ::-webkit-scrollbar {
     width: 0 !important;
   }
   ::-webkit-scrollbar {
     width: 0 !important;height: 0;
   }

   .lrcButton{
       padding-top:15px;
   }
</style>