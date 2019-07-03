import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Followers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          followRequest: ["Saad","Patel","Anish","Gaurav","Manan","SaiAkash","Tanmay","Tanishq","Avik","Panda"],
          following: ["Anchor"]
        };
      }
    
  doFollow = index => {
    const { followRequest, following } = this.state;

    const followNew = followRequest.splice(index, 1);
    following.push(followNew);

    this.setState({
      followRequest,
      following
    });
  };
    
  
  
  
    render() {
    const followReq = this.props.navigation.getParam("followRequest", "0");
    const doFollow = this.props.navigation.getParam("doFollow", "");
    const following = this.props.navigation.getParam("following", "")

    
    return (
      <View style={styles.container}>
        <Text>You follow these people...</Text>

        {following.map((frn, index) => (
          <Button
            key={frn}
            title={`${frn}`}
            
          />
        ))}

        <Button
          title="Go to Home"
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
        />


        <Button
          title="Go to Follow page"
          onPress={() => {
            this.props.navigation.navigate("Follow", {
              followRequest: this.state.followRequest,
              following: this.state.following,
              doFollow: this.doFollow
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding:10
  }
});
