<template>
    <Page class="primary-color" actionBarHidden="true" >
        <GridLayout rows="auto,auto,auto,auto,*,*" >       
            
            <Button :text="'\uf2ca'" margin="20 0 0 10" horizontalAlignment="left" verticalAlignment="center"  class="icon ion" androidElevation="10"></Button>
            <Label text="PLAYING NOW" margin="20 10 0 0" horizontalAlignment="center" verticalAlignment="center"/>
            <Button :text="'\uf394'" margin="20 10 0 0" horizontalAlignment="right" verticalAlignment="center"  class="icon ion" androidElevation="10"></Button>


            <Image row="1" class="album-art" androidElevation="10" margin="40 0 0 0" src="~/assets/images/Davido.png" height="220" width="220"/>

            <StackLayout row="2" horizontalAlignment="center" margin="10 0 0 0" height="56" verticalAlignment="center">
                <Label text="Risky" horizontalAlignment="center"/>
                <Label text="Davido ft. Popcan" horizontalAlignment="center"/>
            </StackLayout>

            <GridLayout rows="auto,auto" row="3" width="90%" >
                <label text="0:25" margin="0 0 2 0" horizontalAlignment="left"/>
                <label text="4:31" margin="0 0 2 0" horizontalAlignment="right"/>
                <label row="1" class="progress-background"  horizontalAlignment="left"  verticalAlignment="center" width="100%" />
                <GridLayout row="1" :width="progress" horizontalAlignment="left">
                    <label class="progress-bar" width="100%" horizontalAlignment="left" verticalAlignment="center"  />
                    <label  class="progress-thumb" horizontalAlignment="right"  height="21" width="21"/>
                </GridLayout>
            </GridLayout>

            <StackLayout  orientation="horizontal" row="4" height="90" width="100%" horizontalAlignment="center" verticalAlignment="bottom" margin="0 0 0 0">
                <Button :text="'\uf427'" width="61" height="61"  verticalAlignment="center"  class="icon ion go-backwards" androidElevation="10"></Button>
                <Button :text="'\uf488'" width="61" height="61" margin="0 39 0 39"  verticalAlignment="center"  class="icon ion" androidElevation="10"></Button>
                <Button :text="'\uf427'" width="61" height="61"  verticalAlignment="center"  class="icon ion" androidElevation="10"></Button>
            </StackLayout>

            <StackLayout orientation="horizontal" row="5" height="80" horizontalAlignment="center" width="100%" verticalAlignment="bottom"  margin="0 0 20 0" >
                <Button :text="'\uf4a9'" width="45" height="45" margin="0 40 0 0"  verticalAlignment="center"  class="icon ion" androidElevation="10"></Button>
                <Button :text="'\uf442'" width="45" height="45" margin="0 40 0 0" verticalAlignment="center"  class="icon ion" androidElevation="10"></Button>
                <Button :text="'\uf3ac'"  width="45" height="45" margin="0 40 0 0" verticalAlignment="center"  class="icon ion" androidElevation="10"></Button>
                <Button :text="'\uf45a'" width="45" height="45"  verticalAlignment="center"  class="icon ion" androidElevation="10"></Button>
            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
    import Vue from 'nativescript-vue'

    export default Vue.extend({
        data() {
            return {
                
            }
        },
        computed: {
            progress() {
                const totalDuration = 100;               
                const playedDuration = 50;                   
                return `${Math.round((playedDuration / totalDuration) * 100)}%`;
            },
        }
    })

</script>

<style scoped>
    .icon{
        width:40;
        height: 40;   
        background-color: #E0E8FB;
        border-radius: 100%;       
        font-size: 20;
    }
    .album-art{
        border-radius: 100%;
    }
    .go-backwards{
        transform: rotate(180);
    }
    .progress-background{
        border-radius: 4;
        border-color:#ffffff;
        border-width:1;
        border-style:groove;
        opacity: 0.8;
        height:6;      
    }
    .progress-bar{
        border-radius: 4;
        border-color:#619DFF;
        background:#619DFF;
        opacity: 1;
        height:6;      
    }
    .progress-thumb{
        border-radius: 100%;
        border-color:#ffffff;
        border-width:6;
        background:#619DFF;    
    }
</style>