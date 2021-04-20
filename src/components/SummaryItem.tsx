import Box from '@material-ui/core/Box';

interface ItemProps {
    title : string,
    value : string | number,
}

export default function SummaryItem(props : ItemProps) {
    return (
        <>
        <Box fontWeight="fontWeightBold" m={1} fontSize={12} >
            {props.title}
        </Box>
        <Box fontWeight="fontWeightLight" m={1}>
            {props.value}
        </Box>
        </>
    );
} 