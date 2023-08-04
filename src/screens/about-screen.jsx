import React, { useEffect, useState } from "react";
import { Linking, ScrollView, Text, View } from "react-native";

import SafeArea from "../components/safe-area";

import { Ionicons } from "@expo/vector-icons";
import { Avatar, Button, Dialog } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth } from "firebase/auth";

const AboutScreen = () => {
  const [userData, setUserData] = useState({});
  const [visible, setVisible] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    setTimeout(async () => {
      const data = await AsyncStorage.getItem("user");
      const user = JSON.parse(data);
      setUserData(user);
    });
  }, []);

  const toggleDialoge = () => {
    setVisible(!visible);
  };

  const url = {
    whatsappURL: "",
    facebookURL: "",
    twitterURL: "",
    instagramURL: "",
  };

  const handlelogOut = async () => {
    await AsyncStorage.removeItem("user");
    await auth.signOut();
  };

  return (
    <SafeArea>
      <View style={{ justifyContent: "space-between", height: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 30,
            paddingLeft: 30,
          }}
        >
          <Dialog
            isVisible={visible}
            onBackdropPress={toggleDialoge}
            overlayStyle={{
              // backgroundColor: "red",
              marginBottom: 65,
              marginTop: 40,
              padding: 20,
              width: "90%",
              borderRadius: 5,
            }}
          >
            <Dialog.Title title="TERMS AND CONDITION" />
            <ScrollView>
              <Text style={{ textAlign: "justify" }}>
                Terms and Conditions Welcome to vyanasports.com! These terms and
                conditions outline the rules and regulations for the use of
                Vyana Sports's Website, located at https://vyanasports.com. By
                accessing this website we assume you accept these terms and
                conditions. Do not continue to use vyanasports.com if you do not
                agree to take all of the terms and conditions stated on this
                page. The following terminology applies to these Terms and
                Conditions, Privacy Statement and Disclaimer Notice and all
                Agreements: "Client", "You" and "Your" refers to you, the person
                log on this website and compliant to the Company's terms and
                conditions. "The Company", "Ourselves", "We", "Our" and "Us",
                refers to our Company. "Party", "Parties", or "Us", refers to
                both the Client and ourselves. All terms refer to the offer,
                acceptance and consideration of payment necessary to undertake
                the process of our assistance to the Client in the most
                appropriate manner for the express purpose of meeting the
                Client's needs in respect of provision of the Company's stated
                services, in accordance with and subject to, prevailing law of
                in. Any use of the above terminology or other words in the
                singular, plural, capitalization and/or he/she or they, are
                taken as interchangeable and therefore as referring to same.
                Cookies We employ the use of cookies. By accessing
                vyanasports.com, you agreed to use cookies in agreement with the
                Vyana Sports's Privacy Policy. Most interactive websites use
                cookies to let us retrieve the user's details for each visit.
                Cookies are used by our website to enable the functionality of
                certain areas to make it easier for people visiting our website.
                Some of our affiliate/advertising partners may also use cookies.
                License Unless otherwise stated, Vyana Sports and/or its
                licensors own the intellectual property rights for all material
                on vyanasports.com. All intellectual property rights are
                reserved. You may access this from vyanasports.com for your own
                personal use subjected to restrictions set in these terms and
                conditions. You must not: Republish material from
                vyanasports.com Sell, rent or sub-license material from
                vyanasports.com Reproduce, duplicate or copy material from
                vyanasports.com Redistribute content from vyanasports.com This
                Agreement shall begin on the date hereof. Our Terms and
                Conditions were created with the help of the Free Terms and
                Conditions Generator. Parts of this website offer an opportunity
                for users to post and exchange opinions and information in
                certain areas of the website. Vyana Sports does not filter,
                edit, publish or review Comments prior to their presence on the
                website. Comments do not reflect the views and opinions of Vyana
                Sports,its agents and/or affiliates. Comments reflect the views
                and opinions of the person who post their views and opinions. To
                the extent permitted by applicable laws, Vyana Sports shall not
                be liable for the Comments or for any liability, damages or
                expenses caused and/or suffered as a result of any use of and/or
                posting of and/or appearance of the Comments on this website.
                Vyana Sports reserves the right to monitor all Comments and to
                remove any Comments which can be considered inappropriate,
                offensive or causes breach of these Terms and Conditions. You
                warrant and represent that: You are entitled to post the
                Comments on our website and have all necessary licenses and
                consents to do so; The Comments do not invade any intellectual
                property right, including without limitation copyright, patent
                or trademark of any third party; The Comments do not contain any
                defamatory, libelous, offensive, indecent or otherwise unlawful
                material which is an invasion of privacy The Comments will not
                be used to solicit or promote business or custom or present
                commercial activities or unlawful activity. You hereby grant
                Vyana Sports a non-exclusive license to use, reproduce, edit and
                authorize others to use, reproduce and edit any of your Comments
                in any and all forms, formats or media. Hyperlinking to our
                Content The following organizations may link to our Website
                without prior written approval: Government agencies; Search
                engines; News organizations; Online directory distributors may
                link to our Website in the same manner as they hyperlink to the
                Websites of other listed businesses; and System wide Accredited
                Businesses except soliciting non-profit organizations, charity
                shopping malls, and charity fundraising groups which may not
                hyperlink to our Web site. These organizations may link to our
                home page, to publications or to other Website information so
                long as the link: (a) is not in any way deceptive; (b) does not
                falsely imply sponsorship, endorsement or approval of the
                linking party and its products and/or services; and (c) fits
                within the context of the linking party's site. We may consider
                and approve other link requests from the following types of
                organizations: commonly-known consumer and/or business
                information sources; dot.com community sites; associations or
                other groups representing charities; online directory
                distributors; internet portals; accounting, law and consulting
                firms; and educational institutions and trade associations. We
                will approve link requests from these organizations if we decide
                that: (a) the link would not make us look unfavorably to
                ourselves or to our accredited businesses; (b) the organization
                does not have any negative records with us; (c) the benefit to
                us from the visibility of the hyperlink compensates the absence
                of Vyana Sports; and (d) the link is in the context of general
                resource information. These organizations may link to our home
                page so long as the link: (a) is not in any way deceptive; (b)
                does not falsely imply sponsorship, endorsement or approval of
                the linking party and its products or services; and (c) fits
                within the context of the linking party's site. If you are one
                of the organizations listed in paragraph 2 above and are
                interested in linking to our website, you must inform us by
                sending an e-mail to Vyana Sports. Please include your name,
                your organization name, contact information as well as the URL
                of your site, a list of any URLs from which you intend to link
                to our Website, and a list of the URLs on our site to which you
                would like to link. Wait 2-3 weeks for a response. Approved
                organizations may hyperlink to our Website as follows: By use of
                our corporate name; or By use of the uniform resource locator
                being linked to; or By use of any other description of our
                Website being linked to that makes sense within the context and
                format of content on the linking party's site. No use of Vyana
                Sports's logo or other artwork will be allowed for linking
                absent a trademark license agreement. iFrames Without prior
                approval and written permission, you may not create frames
                around our Webpages that alter in any way the visual
                presentation or appearance of our Website. Content Liability We
                shall not be hold responsible for any content that appears on
                your Website. You agree to protect and defend us against all
                claims that is rising on your Website. No link(s) should appear
                on any Website that may be interpreted as libelous, obscene or
                criminal, or which infringes, otherwise violates, or advocates
                the infringement or other violation of, any third party rights.
                Reservation of Rights We reserve the right to request that you
                remove all links or any particular link to our Website. You
                approve to immediately remove all links to our Website upon
                request. We also reserve the right to amen these terms and
                conditions and it's linking policy at any time. By continuously
                linking to our Website, you agree to be bound to and follow
                these linking terms and conditions. Removal of links from our
                website If you find any link on our Website that is offensive
                for any reason, you are free to contact and inform us any
                moment. We will consider requests to remove links but we are not
                obligated to or so or to respond to you directly. We do not
                ensure that the information on this website is correct, we do
                not warrant its completeness or accuracy; nor do we promise to
                ensure that the website remains available or that the material
                on the website is kept up to date. Disclaimer To the maximum
                extent permitted by applicable law, we exclude all
                representations, warranties and conditions relating to our
                website and the use of this website. Nothing in this disclaimer
                will: limit or exclude our or your liability for death or
                personal injury; limit or exclude our or your liability for
                fraud or fraudulent misrepresentation; limit any of our or your
                liabilities in any way that is not permitted under applicable
                law; or exclude any of our or your liabilities that may not be
                excluded under applicable law. The limitations and prohibitions
                of liability set in this Section and elsewhere in this
                disclaimer: (a) are subject to the preceding paragraph; and (b)
                govern all liabilities arising under the disclaimer, including
                liabilities arising in contract, in tort and for breach of
                statutory duty. As long as the website and the information and
                services on the website are provided free of charge, we will not
                be liable for any loss or damage of any nature.
              </Text>
              <Button title="Go back" onPress={toggleDialoge} />
            </ScrollView>
          </Dialog>
          <Avatar
            rounded
            source={{
              uri: userData.pic ? userData.pic : "https:picsum.photos/400",
            }}
            size={100}
          />
          <View style={{ paddingLeft: 20, paddingBottom: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "500", marginBottom: 4 }}>
              {userData.name}
            </Text>
            <Text style={{ marginBottom: 10, fontSize: 16, fontWeight: "400" }}>
              {userData.email}
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "purple" }}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: 80,
            flexDirection: "row",
            flexWrap: "wrap",
            marginHorizontal: 30,
            gap: 10,
          }}
        >
          <Button
            title="Upload Face id"
            buttonStyle={{
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
              paddingHorizontal: 30,
            }}
            containerStyle={{
              width: "auto",
              // marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{ fontWeight: "bold", fontSize: 18 }}
          />

          <Button
            title="Subscriptions"
            buttonStyle={{
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
              paddingHorizontal: 30,
            }}
            containerStyle={{
              width: "auto",
              // marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{ fontWeight: "bold", fontSize: 18 }}
          />

          <Button
            title="Terms & Condition"
            buttonStyle={{
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
              paddingHorizontal: 30,
            }}
            containerStyle={{
              width: "auto",
              // marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{ fontWeight: "bold", fontSize: 18 }}
            onPress={toggleDialoge}
          />

          <Button
            title="FAQs"
            buttonStyle={{
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
              paddingHorizontal: 30,
            }}
            containerStyle={{
              width: "auto",
              // marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{ fontWeight: "bold", fontSize: 18 }}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            variant="bodyLarge"
            style={{ fontSize: 22, fontWeight: "500", marginBottom: 30 }}
          >
            Connect
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <Ionicons
              name="ios-logo-instagram"
              size={40}
              color="#FD1D1D"
              onPress={() => {
                Linking.openURL(url.instagramURL);
              }}
            />
            <Ionicons
              name="ios-logo-facebook"
              size={40}
              color="#4267B2"
              onPress={() => {
                Linking.openURL(url.facebookURL);
              }}
            />
            <Ionicons
              name="ios-logo-twitter"
              size={40}
              color="#1DA1F2"
              onPress={() => {
                Linking.openURL(url.twitterURL);
              }}
            />
            <Ionicons
              name="ios-logo-whatsapp"
              size={40}
              color="#25D366"
              onPress={() => {
                Linking.openURL(url.whatsappURL);
              }}
            />
          </View>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Button
            title="Logout"
            type="clear"
            size="lg"
            onPress={handlelogOut}
          />
          <Text>Version 0.0.1 2023</Text>
        </View>
      </View>
    </SafeArea>
  );
};

export default AboutScreen;
