<template>
    <div @click="goToArtist()" class="panel">
        <img class="img" height="120px" width="120px" :src="this.picSrc">
        <div class="name">
            <span >{{name}}</span>
        </div>
    </div>
</template>

<script>


export default {
    name:'ArtistPanel',
    props:{
        picSrc: {
            type: String,
            default: 'https://m.tcgame.com.cn/ueditor/php/upload/image/20200522/1590110455947834.png'
        },
        name: {
            type: String,
            default: '艺人A'
        },
        singerId: {
            type:String
        }
    },
    methods:{
        goToArtist(){
            // console.log("goToArtist");
            // console.log(this.singerId);
            this.$router.push({
                path:'/space/artist',
                query:{
                    id:this.singerId
                }
            });
        }
    }
}
</script>


<style scoped>
.img{
    border-radius:50%; 
    padding-top: 10px;
    object-fit: cover;
}

.name{
    color:white;
    font-weight: bold;
    padding-top:15px;
}

.panel{
    background:hsla(0,0%,50%,.2);
    border-radius: 5%;
    width:150px;
    height:200px;
    cursor : pointer;
}

.panel:hover{
    background:hsla(0,0%,100%,.2);
}
</style>