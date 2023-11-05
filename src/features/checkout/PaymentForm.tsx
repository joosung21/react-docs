import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        결제수단
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="카드에 적힌 이름"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="카드번호"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="카드 유효기간"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="서명란의 마지막 세 자리 숫자"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" name="saveCard" value="yes" />}
            label="다음 번을 위해 신용 카드 세부 정보를 기억합니다."
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
