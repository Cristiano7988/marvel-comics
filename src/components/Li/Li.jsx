import styled from "styled-components";

const ListItem = styled.li`
    list-style: none;
    overflow: hidden;
    border-radius: 5px;
`

const Li = (props) => <ListItem children={props.children} />;

export default Li;
