import React, { Component } from "react"
import { StyleSheet, TouchableOpacity, TextStyle } from 'react-native'
import {
  VerticalLayout,
  HorizontalLayout,
  Text,
  Image
} from "../index"
import commonStyle from '../../styles/commomStyle';
import {
  bell,
  home,
  dropdown,
  back,
  logo,
  defaultProfile,
} from 'Todo/src/assets/index';
import {Specs, palette} from 'Todo/src/theme/index';



export default class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      profileImage: ''
    }
    this.openDrawer = this.openDrawer.bind(this)
  }

  openDrawer() {
    let props = this.props
    props.navigation.openDrawer()
  }



  titleText: TextStyle = {
    fontSize: 14,
    ...Specs.fontBold,
    color:  palette.textColor
  }

  subTitleText: TextStyle = {
    fontSize: 12,
    ...Specs.fontRegular,
    color:  palette.textColor
  }

  connectHeader() {
    return (
      <HorizontalLayout>
        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
          <VerticalLayout style={styles.MENU_CONTAINER}>
            <Image
              source={back}
              resizeMode="contain"
              style={styles.MENU_IMAGE_STYLE}
            />
          </VerticalLayout>
        </TouchableOpacity>

        <VerticalLayout style={{ width: '80%', justifyContent: 'center', alignItems: 'center' }}>
          <Text text="Ankit Pal" style={this.titleText}></Text>
          <Text text="Reimbursement Issue" style={this.subTitleText}></Text>
        </VerticalLayout>

      </HorizontalLayout>
    )
  }
  renderProfile(){
    return   <VerticalLayout style={{
                width: 25,
                height:25,
                backgroundColor: '#e7eaf0',
                borderRadius: 12.5,
                ...commonStyle.center,
                marginHorizontal: 5,
  
               }}>
         

                <Image source={defaultProfile} resizeMode="contain" style={{ width: 15,height:15, position: 'absolute',alignSelf:'center'}}></Image>
             
           </VerticalLayout>

  }
  render() {
    if(!this.props.connect) {
    return (
      <VerticalLayout style={{...styles.CONTAINER, ...styles.border}}>
        <HorizontalLayout style={styles.innerContainer}>
          <HorizontalLayout>
            <TouchableOpacity style={styles.MENU_CONTAINER} onPress={() => {}}>
              <Image
                source={home}
                resizeMode="contain"
                style={{height: 20, width: 20, tintColor: palette.PRIMARY}}
              />
            </TouchableOpacity>

            <VerticalLayout style={styles.LOGO_IMAGE_CONTAINER}>
              <Image
                source={logo}
                resizeMode="contain"
                style={styles.LOGO_IMAGE_STYLE}
              />
            </VerticalLayout>
          </HorizontalLayout>

          <HorizontalLayout style={styles.LEFT_CONTAINER}>
            <TouchableOpacity
              onPress={() => {
                console.log("click on notification")
              }}>
              <Image
                source={bell}
                resizeMode="contain"
                style={styles.BELL_IMAGE_STYLE}></Image>
            </TouchableOpacity>

            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => {}}>
              {this.renderProfile()}
              <Image
                source={dropdown}
                resizeMode="contain"
                style={styles.dropDownImage}
              />
            </TouchableOpacity>
          </HorizontalLayout>
        </HorizontalLayout>
      </VerticalLayout>
    );
   }
   else {
     return (
      <VerticalLayout style={styles.CONTAINER}>
         <HorizontalLayout style={styles.innerContainer}>
         {this.connectHeader()}
        </HorizontalLayout>
     </VerticalLayout>
     )
   }
  }
}
const styles = StyleSheet.create({
  CONTAINER: {
    backgroundColor: palette.white,
    shadowColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 74,
  },
  border: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: palette.borderHeader,
  },
  innerContainer: {
    paddingTop: 25,
    paddingBottom: 6,
  },
  LOGO_IMAGE_STYLE: {
    width: 20,
    height:20,
    tintColor: palette.PRIMARY,
  },
  MENU_IMAGE_STYLE: {
    width: 22.3,
    height: 11.6,
    marginLeft: 3,
    marginTop: 6,
  },
  IMAGE_STYLE: {
    height: 30,
    width: 30,
  },
  LEFT_CONTAINER: {
    ...commonStyle.flexOne,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  BELL_IMAGE_STYLE: {
    width: 20,
    height: 21,
    marginRight: 15,
  },
  PROFILE_IMAGE_STYLE: {
    marginRight: 5,
    width: 25,
    height: 25,
  },
  MENU_TEXT: {
    fontSize: 10,
    ...Specs.fontRegular,
    color: palette.grey5,
    marginTop: 2,
  },
  MENU_CONTAINER: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  LOGO_IMAGE_CONTAINER: {
    marginLeft: 15,
    marginTop: 2
  },
  dropDownImage: {
    width: 11.8,
    height: 7,
    marginRight: 12,
  },
  textStyle: {
    ...Specs.fontSemibold,
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 12,
    color: palette.textColor,
  },
  emailText: {
    fontSize: 12,
    paddingTop: 3,
    paddingBottom: 7,
    color: palette.TEXT,
    textAlign: 'center',
  },
  changeProfileText: {
    color: palette.lightGrayPlaceholder,
    paddingVertical: 5,
  },
  buttonContainer: {
    marginBottom: 30,
  },
});
