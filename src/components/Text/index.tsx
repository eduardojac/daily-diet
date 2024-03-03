import { Title } from "./styles";

type Props = {
    title: string;
}

export function Text({ title }: Props) {
    return (
        <Title>{title}</Title>
    )
}