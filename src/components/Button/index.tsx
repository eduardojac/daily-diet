import { TouchableOpacityProps } from "react-native";

import { AddIcon, ButtonTypeStyleProps, Container, DeleteIcon, EditIcon, Title } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    icon?: string;
    type?: ButtonTypeStyleProps;
}

export function Button({ title, icon, type, ...rest }: Props) {
    return (
        <Container type={type} {...rest}>
            {icon === "add" && <AddIcon type={type}/>}
            {icon === "edit" && <EditIcon type={type}/>}
            {icon === "delete" && <DeleteIcon type={type}/>}
            <Title type={type}>{title}</Title>
        </Container>
    )
}