<template>
    <div class="rec">
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
        }
    },
    data(){
        return{
         
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
}

.listname{
    color:white;
    font-weight: bold;
}

.img{
    object-fit: cover;
}
</style>
