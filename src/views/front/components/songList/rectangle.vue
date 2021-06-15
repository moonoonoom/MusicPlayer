<template>
    <div class="rec" @click="goToPage">
        <div style="width:10%;height:80px;">
            <img class="img" height="80px" width="80px" :src="this.picSrc">
        </div>

        <div 
            style="display: table-cell;
                    vertical-align: middle;
                    height:100%;
                    text-align:left;
                    padding-left:20px;
                    width:90%;">
            <span class="listname">{{listName}}</span>
        </div>
        <!-- <div class="deteleBtn">
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </div> -->
    </div>
</template>

<script>


export default {
    name:'SongListRec',
    props:{
        listName:{
            type: String,
            default: '歌单名字'
        },
        picSrc: {
            type: String,
            default: 'http://p2.music.126.net/lGKTPIR0dvEt09OMlzflxA==/93458488376709.jpg'
        },
        id:{
            type:Number
        }
    },
    data(){
        return{
         
        }
    },
    mounted(){
        // console.log(this.$route);
    },
    methods:{
        goToPage(){
            console.log(this.id);
            this.$router.push({
                path:'/space/songlist/page',
                query:{
                    id:this.id
                }
            });
        }
    }
}
</script>


<style scoped>
.rec{
    display: table;
    background:hsla(0,0%,100%,.2);
    width:300px;
    border-radius: 5%;
    cursor : pointer;
}

.rec:hover{
    background:hsla(0,0%,50%,.2);
}

.listname{
    color:white;
    font-weight: bold;
}

.img{
    object-fit: cover;
}

</style>
