import React, {Component} from 'react';
import {Button, Icon, SideNav, SideNavItem} from 'react-materialize';

class SideNavbar extends Component {
    state = {
        userDetails: {
            background: "http://images.all-free-download.com/images/wallpapers_thum/small_mushrooms_5958.jpg",
            image: "http://via.placeholder.com/150x150",
            email: "test@test.com",
            name: "Test Person"
        }
    };
    
    componentDidMount() {
        //once user logs in populate the userDetails object
    }
    render() {
        return(
            <SideNav
            trigger={<Button>SIDE NAV DEMO</Button>}
            options={{ closeOnClick: true }}
            >
            <SideNavItem userView
              user={{
                background: this.state.userDetails.background,
                image: this.state.userDetails.image,
                name: this.state.userDetails.name,
                email: this.state.userDetails.email
              }}
            />
            <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
            <SideNavItem href='#!second'>Second Link</SideNavItem>
            <SideNavItem divider />
            <SideNavItem subheader>Subheader</SideNavItem>
            <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
          </SideNav>
        )
    }
}


export default SideNavbar;