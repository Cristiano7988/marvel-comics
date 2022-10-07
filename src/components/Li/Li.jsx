import styled from "styled-components";

const ListItem = styled.li`
    list-style: none 
`

const Li = (props) => <ListItem children={props.children} />;

export default Li;
