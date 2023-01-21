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
      questionContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:0,
        margin:0,
        width:'100%',
        backgroundColor:Colors.white
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
        fontWeight:'bold',
        width:'100%'
      },
      dashboardHeaderStyle:{
        backgroundColor:Colors.backgroundBlue,
        borderColor:Colors.backgroundBlue
      },
      qPageTop:{
        width:'100%',
        flexDirection:'row',
        
      },
      questionsContainer:{
        padding:20,
        width:'100%',
        backgroundColor:Colors.white
      },
      levelDif:{
        color:Colors.fontLevel,
        fontWeight:'bold'
      },
      questionView:{
        paddingVertical:20
      },
      qeustionText:{
        fontSize:18
      },
      optionsView:{
        display:'flex',
        flexDirection:'column'
      },
      answerBtn:{
        backgroundColor:Colors.grey,
        marginTop:20,
        padding:20,
        width:'100%',
        borderRadius:10
      },
      qHeader:{
        backgroundColor:Colors.backgroundBlue,
        width:'100%',
        height:'10%',
        justifyContent:'center',
        padding:25,
        flexDirection:'row',
        justifyContent:'space-between'
      },
      qText:{
        color:Colors.white,
        fontSize:18

      },
      FailedContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.white,
        backgroundColor:Colors.red,

      },
      FailedHeader:{
        backgroundColor:Colors.red,
        width:'100%',
        margin:10,
        paddingVertical:20
      },
      FailedBody:{
        display:'flex',
        width:'100%',

      },
      FailedHeaderContainer:{
        justifyContent:'center',
        alignItems:'center'
      },
      FailedHeaderTextBig:{
        color:Colors.white,
        fontSize:36,
        fontWeight:'bold',
        paddingBottom:50
      },
      FailedHeaderText:{
        fontSize:24,
        fontWeight:'bold',
        color:Colors.white,
        paddingBottom:50
      },
      restart:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        padding:20
      },
      restartBtn:{
        width:'100%',
        backgroundColor:Colors.white,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        padding:20
      },
      successContainer:{
        flex:1,
        backgroundColor:Colors.green,
        justifyContent:'center',
        alignItems:'center',
        padding:20

      },
      SuccessHeader:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:50

      },
      HeaderText:{
        color:Colors.white,
        fontSize:36,
        fontWeight:'bold'
      },
      BodyText:{
        color:Colors.white,
        fontSize:24
      }



})