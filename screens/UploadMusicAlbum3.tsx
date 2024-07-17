import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const UploadMusicAlbum3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.uploadMusicalbum}>
      <Pressable
        style={[styles.button, styles.frameFlexBox]}
        onPress={() => navigation.navigate("UploadMusicSingle9")}
      >
        <Text style={[styles.continue, styles.blinkerTypo1]}>Continue</Text>
      </Pressable>
      <View style={styles.frameParent}>
        <View>
          <View style={styles.inputLayout}>
            <View style={styles.inputFieldChild} />
            <Text style={[styles.blinker, styles.blinkerTypo]}>
              Select role
            </Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/arrowright7.png")}
            />
          </View>
          <View style={[styles.inputField1, styles.inputLayout]}>
            <View style={styles.inputFieldChild} />
            <Text style={[styles.blinker, styles.blinkerTypo]}>Enter name</Text>
            <Image
              style={styles.eyeIcon}
              contentFit="cover"
              source={require("../assets/eye5.png")}
            />
          </View>
        </View>
        <View style={styles.addCredits}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/addcircle.png")}
          />
          <Text style={[styles.blc, styles.blcTypo]}>Add more credits</Text>
        </View>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Pressable style={styles.pressable} onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/241.png")}
          />
        </Pressable>
        <Text style={styles.uploadYourAlbum}>Upload Your Album</Text>
        <Text style={[styles.followTheseSteps, styles.blcTypo]}>
          Follow these steps to complete your upload.
        </Text>
        <View style={styles.stepGroupHorizontal}>
          <View
            style={[styles.stepGroupHorizontalChild, styles.stepGroupPosition]}
          />
          <View
            style={[styles.stepGroupHorizontalItem, styles.stepGroupPosition]}
          />
          <View style={styles.complete}>
            <View style={styles.frameFlexBox}>
              <View style={styles.stepbaseitem}>
                <View style={[styles.dot, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle, styles.stepTypo]}>Basic Info</Text>
          </View>
          <View style={styles.complete1}>
            <View style={styles.frameFlexBox}>
              <View style={styles.stepbaseitem}>
                <View style={[styles.dot, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle, styles.stepTypo]}>Add Song</Text>
          </View>
          <View style={styles.inProgress}>
            <View style={styles.frameFlexBox}>
              <View style={[styles.stepbaseitem2, styles.stepbaseitemBorder]}>
                <View style={[styles.dot, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle2, styles.stepTypo]}>Credits</Text>
          </View>
          <View style={styles.default}>
            <View style={styles.frameFlexBox}>
              <View style={[styles.stepbaseitem3, styles.stepbaseitemBorder]}>
                <View style={[styles.dot3, styles.dotLayout]} />
              </View>
            </View>
            <Text style={[styles.stepTitle3, styles.stepTypo]}>Release</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  blinkerTypo1: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  blinkerTypo: {
    fontFamily: FontFamily.mobileBodyCopy,
    color: Color.primary0,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  inputLayout: {
    height: 52,
    width: 335,
  },
  blcTypo: {
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  headerPosition: {
    height: 210,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  stepGroupPosition: {
    height: 1,
    borderTopWidth: 1,
    top: 24,
    marginLeft: -125,
    left: "50%",
    borderStyle: "solid",
    position: "absolute",
  },
  dotLayout: {
    height: 8,
    width: 8,
    borderRadius: Border.br_1215xl,
    overflow: "hidden",
  },
  stepTypo: {
    marginTop: 12,
    width: 60,
    fontSize: FontSize.btnSmallNormal_size,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    textAlign: "center",
  },
  stepbaseitemBorder: {
    borderWidth: 1,
    padding: Padding.p_9xs,
    borderRadius: Border.br_1215xl,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  continue: {
    color: Color.primary,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  button: {
    top: 736,
    paddingHorizontal: Padding.p_99xl,
    paddingVertical: Padding.p_sm,
    width: 335,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    backgroundColor: Color.white,
    left: 20,
    position: "absolute",
  },
  inputFieldChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_400,
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  blinker: {
    left: 16,
    color: Color.primary0,
    top: "50%",
    marginTop: -12,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.mobileH6HeadingSubHead_size,
  },
  arrowRightIcon: {
    right: 16,
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  eyeIcon: {
    height: "46.15%",
    width: "6.99%",
    top: "26.92%",
    right: "4.69%",
    bottom: "26.92%",
    left: "88.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  inputField1: {
    marginTop: 16,
  },
  blc: {
    marginLeft: 8,
    color: Color.white,
    fontFamily: FontFamily.mobileH6HeadingSubHead,
    fontWeight: "600",
  },
  addCredits: {
    borderWidth: 2,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    marginTop: 24,
    borderColor: Color.primary30,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primary,
  },
  frameParent: {
    top: 218,
    alignItems: "center",
    left: 20,
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.colorGray_1300,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  pressable: {
    top: 40,
    height: 24,
    width: 24,
    left: 20,
    position: "absolute",
  },
  uploadYourAlbum: {
    marginLeft: -71.5,
    fontSize: FontSize.mobileH5HeadingComponent_size,
    fontFamily: FontFamily.mobileH5HeadingComponent,
    fontWeight: "500",
    left: "50%",
    top: 40,
    textAlign: "center",
    color: Color.white,
    lineHeight: 24,
    position: "absolute",
  },
  followTheseSteps: {
    top: 80,
    left: 44,
    color: Color.primary0,
    fontFamily: FontFamily.mobileBodyCopy,
    position: "absolute",
  },
  stepGroupHorizontalChild: {
    width: 251,
    zIndex: 0,
    borderColor: Color.primary30,
  },
  stepGroupHorizontalItem: {
    borderColor: Color.white,
    width: 207,
    zIndex: 1,
  },
  dot: {
    backgroundColor: Color.primary30,
  },
  stepbaseitem: {
    padding: Padding.p_9xs,
    borderRadius: Border.br_1215xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  stepTitle: {
    color: Color.white,
  },
  complete: {
    zIndex: 2,
    alignItems: "center",
  },
  complete1: {
    zIndex: 3,
    alignItems: "center",
  },
  stepbaseitem2: {
    shadowColor: "rgba(255, 255, 255, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    borderColor: Color.primary0,
    backgroundColor: Color.white,
    borderWidth: 1,
  },
  stepTitle2: {
    color: Color.primary0,
  },
  inProgress: {
    zIndex: 4,
    alignItems: "center",
  },
  dot3: {
    backgroundColor: Color.primary10,
  },
  stepbaseitem3: {
    backgroundColor: Color.primary0,
    borderColor: Color.primary10,
  },
  stepTitle3: {
    color: Color.primary20,
  },
  default: {
    zIndex: 5,
    alignItems: "center",
  },
  stepGroupHorizontal: {
    marginLeft: -167.5,
    top: 120,
    borderRadius: Border.br_mini,
    justifyContent: "space-between",
    padding: Padding.p_base,
    left: "50%",
    backgroundColor: Color.colorGray_400,
    flexDirection: "row",
    width: 335,
    position: "absolute",
  },
  uploadMusicalbum: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.primary,
  },
});

export default UploadMusicAlbum3;