<template>
    <div class="squ">
        <div >
            <img class="img" height="180px" width="180px"  :src="this.picSrc">
        </div>

      
    </div>
</template>

<script>


export default {
    name:'SongListSqu',
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
.squ{
    height:180px;
    width:180px;
    cursor : pointer;
}

.squ:hover img{
    filter:alpha(Opacity=50);-moz-opacity:0.5;opacity: 0.5
}

.img{
    object-fit: cover;
}

.listname{
    color:white;
    font-weight: bold;
}
</style>
