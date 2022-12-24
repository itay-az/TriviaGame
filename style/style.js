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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:Colors.backgroundBlue,
      },
      mainLogo:{
        justifyContent:'center',
        alignItems:'center',
        width:400,
        height:400,
        resizeMode:'contain'
      },

      DashboardBtn:{
        paddingHorizontal:70,
        marginTop:100,
        width:'80%',
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
      },
      dashboardHeaderStyle:{
        backgroundColor:Colors.backgroundBlue,
        borderColor:Colors.backgroundBlue
    }
})