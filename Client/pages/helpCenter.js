import { Box, Grid, GridItem, Text } from "@chakra-ui/react"

const helpCenter = [
    {
      head :"Popular Topics",
      subhead1: "Where can I view my subscription information?",
      subhead2: "Registering with ZEE5",
      subhead3: "How do I watch ZEE5 on my television?",
      subhead4: "Video not playing due to DRM/protected content"
    },
    {
      head:"Subscriptions & Rentals",
      subhead1:"Premium Subscription Plans",
      subhead2:"How  do I purchase a Premium subscription?",
      subhead3:"Renting movies on ZEEPLEX",
      subhead4:"Upgrading your Subscription",
      subhead5:"I am unable to watch Premium videos"
    },
    {
      head:"My Account",
      subhead1:"Managing your subscription",
      subhead2:"I can’t sign in to ZEE5",
      subhead3:"How many devices can I watch on?",
      subhead4:"How can I delete / log out a registered device?",
      subhead5:"I purchased a subscription, but it’s not working Parental Control"
    },
   {
      head:" Watching ZEE5",
      subhead1:"I need help with playing a video",
      subhead2:"I need help with audio ",
      subhead3:"I need help with casting ZEE5 on my TV ",
      subhead4:"All about downloads ",
      subhead5:"All about subtitles "
    },
    {
      head:"My ZEE5 App",
      subhead1:"App Performance",
      subhead2:"I am unable to authenticate my TV",
      subhead3:"How can I enable automatic updates for the ZEE5 app?",
      subhead4:"What’s the latest ZEE5 App version?",
      subhead5:"How Can I?"
    },
    {
      head:"Offers & Partnerships",
      subhead1:"ZEE5 Offers",
      subhead2:"ZEE5 Partnerships",
      subhead3:"Applying a code in ZEE5",
    }
  ]


export default function HelpCenter () {
    return (
        <Box  borderRadius={"50px"}  w="80%" m="auto" my="50px">
            <Grid backgroundColor={"#FFFFFF"} p="50px"templateColumns={{base:"repeat(1,1fr)",sm:"repeat(2,1fr)",md:"repeat(3,1fr)"}} gap={5}>
            {helpCenter.map((item,i)=>{
                return <GridItem w="300px" h="350px" borderRadius={"20px"} backgroundColor={"#FFFFFF"} border="2px solid #0F0617" key={i}>
                    <Text borderTopRadius={"15px"} fontSize={"2xl"} color={"#FFFFFF"}>{item.head}</Text>
                    <Box backgroundColor={"#FFFFFF"} p="10px" pb="50px" >
                    <Text fontSize={"2xl"} backgroundColor={"#FFFFFF"}>{item.subhead1}</Text>
                    <Text fontSize={"2xl"} backgroundColor={"#FFFFFF"}>{item.subhead2}</Text>
                    <Text fontSize={"2xl"} backgroundColor={"#FFFFFF"}>{item.subhead3}</Text>
                    <Text fontSize={"2xl"} backgroundColor={"#FFFFFF"}></Text>
                    </Box>
                </GridItem>
            })}
            </Grid>
        </Box>
    )
}