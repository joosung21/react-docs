import * as React from 'react'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Grid from '@mui/material/Grid'

const products = [
  {
    name: '한겨울 코트',
    desc: '겨울에 입기 좋은 코트',
    price: '₩160,000',
  },
  {
    name: '블링블링 봄바지',
    desc: '봄에 입기 좋은 바지',
    price: '₩60,000',
  },
  {
    name: '하늘하늘한 여름 셔츠',
    desc: '여름에 입기 좋은 셔츠',
    price: '₩40,000',
  },
  {
    name: '씨뜨루 신발',
    desc: '여름에 신기 좋은 신발',
    price: '₩80,000',
  },
  { name: '배송비', desc: '', price: 'Free' },
]
// const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA']
const addresses = [
  '경기도 성남시 분당구 판교역로 235',
  '판교테크노밸리',
  'A동 4층',
  '우편번호 13486',
]
const payments = [
  { name: '카드타입', detail: 'Visa' },
  { name: '카드소유주', detail: 'JOOSUNG AHN' },
  { name: '카드번호', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: '유효기간', detail: '04/2024' },
]

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        주문재확인
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ₩340,000
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            배송주소
          </Typography>
          <Typography gutterBottom>안주성</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
