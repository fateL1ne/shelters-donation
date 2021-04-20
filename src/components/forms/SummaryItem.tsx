import Box from '@material-ui/core/Box';

interface ItemProps {
    title : string,
    value : string | number,
}

export default function SummaryItem(props : ItemProps) {
    return (
        <>
        <Box fontWeight="fontWeightBold" m={1} fontSize={13} >
            {props.title}
        </Box>
        <Box fontWeight="fontWeightRegular" m={1}>
            {props.value}
        </Box>
        </>
    );
} 