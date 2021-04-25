import React from 'react'
import { Layout, Header, Drawer, Content } from 'react-mdl';
import SideMenu from './SideMenu';
import Search from './Search';
import Cards from './Cards';
import Modal from 'react-modal'
import Lyrics from './Lyrics';
import './Head.css';
import {Animated} from "react-animated-css";
const customStyles = {
    content : {
      backgroundColor: 'rgba(90, 90, 90, .95)'
    }
  };
Modal.defaultStyles.overlay.zIndex = 9
function Head(props) {
    return (
        <div>
            <Layout fixedHeader>
                <Header title={<span styles={`font-family: Raleway !important`}>Search Music</span>}>
                </Header>
                <Drawer title="">
                    <SideMenu />
                </Drawer>
                <Content>
                    <Search bar={props.bar} api={props.api} keyword={props.keyword} key_change={props.key_change}/>
                    <Cards lyrics={props.lyrics} data={props.data} />
                    <Modal
                        isOpen={props.modal}
                        onRequestClose={props.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal" >
                            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                            <Lyrics closeModal={props.closeModal} data={props.song} className="modal"/>
                            </Animated>
                    </Modal>
                </Content>
            </Layout>
        </div>
    )
}

export default Head
