import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import Review from './Review'

const steps = ['배송지 주소', '결제수단', '주문재확인']

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddressForm />
    case 1:
      return <PaymentForm />
    case 2:
      return <Review />
    default:
      throw new Error('Unknown step')
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
          결제하기
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              주문해 주셔서 감사합니다.
            </Typography>
            <Typography variant="subtitle1">
              주문 번호는 #2001539입니다. 주문 확인서를 이메일로 보내드립니다. 주문이 배송되면
              업데이트됩니다.
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  뒤로가기
                </Button>
              )}
              <Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
                {activeStep === steps.length - 1 ? '주문하기' : '다음'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Paper>
    </Container>
  )
}
