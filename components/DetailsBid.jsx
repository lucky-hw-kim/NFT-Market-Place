import { View, Text, Image } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'
import { EthPrice } from './SubInfo'


const DetailsBid = ({bid}) => {
  return ( 
    <View style={{
      width:"100%",
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: SIZES.base,
      paddingHorizontal: SIZES.base * 2
    }}>
     <Image 
     source={bid.image}
     resizeMode="contain"
     style={{
      width: 48, height: 48
     }}
     />
     <View>
     <Text style={{
        fontSize: SIZES.small,
        fontFamily: FONTS.semiBold,
        color: COLORS.primary
      }}>
       Bid placed by {bid.name}
      </Text>

      <Text style={{
        fontSize: SIZES.small-2,
        fontFamily: FONTS.regular,
        color: COLORS.secondary
      }}>
       {bid.date}
      </Text>
     </View>
      <EthPrice price={bid.price}/>
    </View>
  )
}

export default DetailsBid