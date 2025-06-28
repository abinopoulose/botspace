import { Box, Typography } from '@mui/material';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import WifiIcon from '@mui/icons-material/Wifi';
import BatteryFullOutlinedIcon from '@mui/icons-material/BatteryFullOutlined'; // horizontal battery

const PhoneFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        width: '22rem',
        height: '700px',
        bgcolor: '#131122',
        borderRadius: '3rem',
        p: 2,
        boxShadow: 24,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
      <Box
        sx={{
          height: '2.5rem',
          position: 'relative',
          backgroundColor: '#000',
          borderTopLeftRadius: '2rem',
          borderTopRightRadius: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 4
        }}>
        <Typography variant="caption" color="white" fontWeight={600}>
          9:16
        </Typography>
        <Box
          sx={{
            width: '3rem',
            height: '0.5rem',
            borderRadius: '1rem',
            backgroundColor: '#1c1f2f',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />

        <Box display="flex" gap="0.4rem" alignItems="center">
          <SignalCellularAltIcon sx={{ color: 'white', fontSize: 16 }} />
          <WifiIcon sx={{ color: 'white', fontSize: 16 }} />
          <BatteryFullOutlinedIcon
            sx={{
              color: 'white',
              fontSize: 18,
              transform: 'rotate(90deg)',
              transformOrigin: 'center'
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          borderBottomRightRadius: '2rem',
          borderBottomLeftRadius: '2rem',
          scrollbarWidth: 'none',
          pointerEvents: 'none'
        }}>
        {children}
      </Box>
    </Box>
  );
};

export default PhoneFrame;
