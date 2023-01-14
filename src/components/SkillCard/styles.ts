import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonSkills: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonTextSkills: {
    color: '#fff',
    fontFamily: 'Inter-Medium',
    fontSize: 18,
  },
  iconsContainer: {
    flex: 1,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconsDivider: {
    width: 24,
    color: 'rgba(196,196,196,0.24)',
  },
});
export {styles};
