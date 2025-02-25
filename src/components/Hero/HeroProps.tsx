'use client';

import {
    Avatar,
    Button,
    List,
    ListItemAvatar,
    ListItemText,
    Stack,
    Typography,
    useTheme
} from "@mui/material";

interface HeroPageProps {
    title: string,
    subtitle: string,
    imageUrl: string,
    primaryButtonText: string,
    secondaryButtonText: string,
}

function HeroProps(props: HeroPageProps){
    const {
        title,
        subtitle,
        imageUrl,
        primaryButtonText,
        secondaryButtonText
    } = props

    const theme = useTheme();

    return(
        <Stack direction='column' justifyContent='center' alignItems='center'>
            <List>
                <ListItemAvatar sx={{ display:'flex', justifyContent: 'center'}}>
                    <Avatar
                        sx={{
                            height: '500px',
                            width: '500px'
                        }}
                        alt='company logo'
                        src={imageUrl}
                    />
                </ListItemAvatar>
                <ListItemText sx={{textAlign: 'center'}}>
                    <Typography variant='h1'>
                        {title}
                    </Typography>
                </ListItemText>
                <ListItemText sx={{textAlign: 'center'}}>
                    <Typography variant='h2'>
                        {subtitle}
                    </Typography>
                </ListItemText>
            </List>
            <Stack flexDirection='row' gap={1}>
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: theme.palette.background.paper,
                        color: theme.palette.primary.contrastText,
                        fontWeight: 700,
                        '&:hover': {
                            bgcolor: theme.palette.secondary.light,
                        }
                    }}
                >
                    {primaryButtonText}
                </Button>
                <Button
                    variant='outlined'
                    sx={{
                        border: `1px solid #b4b4b4`,
                        bgcolor: 'transparent',
                        color: theme.palette.primary.main,
                        fontWeight: 700
                    }}
                >
                    {secondaryButtonText}
                </Button>
            </Stack>
        </Stack>
    )
}

export default HeroProps

