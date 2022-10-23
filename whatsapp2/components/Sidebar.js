import { Avatar, IconButton } from "@mui/material"
import styled from "styled-components";
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function Sidebar() {
    return (
        <Container>
            <Header>
                <UserAvatar />
                <IconContainer>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </IconContainer>
            </Header>
        </Container>
    );
}
export default Sidebar;
const Container = styled.div``;
const Header = styled.div``;
const UserAvatar = styled(Avatar)`
margin-top: 10px;
margin-left: 14px;
`;

const IconContainer = styled.div``;
