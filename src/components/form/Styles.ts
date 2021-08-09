import {Specs, palette} from 'Todo/src/theme/index';
import {Shadow} from '../Shadow/Shadow';

const shadowStyle = {
  shadowColor: 'rgba(0, 0, 0, 0.14)',
  shadowOffset: {
    width: 0,
    height: 24,
  },
  shadowRadius: 38,
  shadowOpacity: 1,
};
const borderStyle = {
  borderColor: '#e7eaf0',
  borderStyle: 'solid',
  borderWidth: 1,
};

const commonText = {
  color: palette.TEXT,
  ...Specs.fontBold,
  fontSize: 12,
};

const styles = {
  datePickerContainer: {
    height: 50,
    marginTop: '2%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  pickerButtonStyle: {
    ...borderStyle,
    flex: 0.47,
    borderRadius: 5,
  },
  pickerContainer: {
    backgroundColor: palette.white,
    ...borderStyle,
    height: 50,
    marginTop: '2%',
    borderRadius: 5,
    ...Shadow,
  },
  textStyle: {
    fontSize: 14,
    ...Specs.fontBold,
    marginTop: '3%',
    marginLeft: 4,
  },
  pickerText: {
    ...commonText,
  },
  dullText: {
    fontSize: 10,
    ...Specs.fontSemiBold,
    color: palette.TEXT,
  },
  uploadButtonStyle: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: palette.PRIMARYBORDER,
    backgroundColor: palette.white,
    marginBottom: '3%',
    width: '38%',
    marginTop: '2.5%',
  },
  flatListStyle: {
    backgroundColor: palette.white,
    borderRadius: 5,
    ...shadowStyle,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  listContainer: {
    backgroundColor: palette.white,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: palette.PRIMARYBORDER,
    fontsize: 12,
    ...Specs.fontSemiBold,
  },
  applyButtonStyle: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: palette.PRIMARYBORDER,
    backgroundColor: palette.PRIMARYBORDER,
    marginTop: '2%',
    marginHorizontal: '6%',
  },
  profileText: {
    ...commonText,
    marginTop: 4,
    marginLeft: '0.9%',
  },
  profileInnerContainer: {
    flexDirection: 'row',
    width: '50%',
    marginTop: '2%',
  },
  profileMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    // paddingLeft: Wp("6%"),
  },
  applyButtonText: {
    color: palette.white,
    fontsize: 14,
    ...Specs.fontSemiBold,
    paddingVertical: 10,
  },
  cancelButton: {
    textAlign: 'center',
    fontSize: 14,
    ...Specs.fontSemiBold,
    color: palette.textColor,
    marginVertical: '2%',
  },
  mainListContainer: {
    ...shadowStyle,
    marginHorizontal: 15,
    marginTop: 9,
  },
  headerContainer: {
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: palette.offWhite,
    padding: 12,
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 14,
    ...Specs.fontMedium,
    color: palette.PRIMARYBORDER,
  },
  clearFilter: {
    fontSize: 12,
    ...Specs.fontRegular,
    color: palette.lightGrayPlaceholder,
  },
  buttonContainer: {
    width: '42%',
    borderRadius: 0,
    marginBottom: 20,
    height: 40,
  },
  buttonText: {
    fontSize: 14,
    ...Specs.fontMedium,
    color: palette.white,
  },
};

export default styles;
