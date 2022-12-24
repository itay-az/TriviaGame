import {StyleSheet} from 'react-native';

const Colors = {
    black:'#000',
    white:'#fff',
    green:'#74AF43',
    red:'#B53316',
    blue:'#349AE9',
    grey:'#F5EDED',
    backgroundBlue:'#0D64A7',
    fontAnswerColor:'#686868',
    fontLevel:'#F7BB2C'

}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:Colors.backgroundBlue,
        margin:0,
        padding:0
      },
      mainLogo:{
        justifyContent:'center',
        alignItems:'center',
        width:500,
        height:500,
        resizeMode:'contain'
      },

      DashboardBtn:{
        paddingHorizontal:70,
        marginTop:80,
        width:'100%',
        height:'10%',
        backgroundColor:Colors.white,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
      },
      btnTxt:{

        color:Colors.fontAnswerColor,
        fontSize:32,
        fontWeight:'bold'
      }
})