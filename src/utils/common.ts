import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import SnackBarManager from './snackBarManager';
import { googleApiKey } from '../services/apiConstants';

export const showErrorSnackBar = (message: string) => {
  let Snackbar: any = SnackBarManager.getSnackBar();
  setTimeout(() => {
    Snackbar.alertWithType('error', 'Error!', message, null, 1500);
  }, 100);
};

export const showSuccessSnackBar = (
  message: string,
  title: String = 'Success!',
) => {
  let Snackbar: any = SnackBarManager.getSnackBar();
  setTimeout(() => {
    Snackbar.alertWithType('success', title, message, null, 1500);
  }, 100);
};

export const showInfoSnackBar = (
  title: string,
  message: string,
  timeOut = 3000,
) => {
  let Snackbar: any = SnackBarManager.getSnackBar();

  setTimeout(() => {
    Snackbar.alertWithType('info', title, message, null, timeOut);
  }, 100);
};

export const isNetworkConnected = async () => {
  let state = await NetInfo.fetch();
  return state.isConnected;
};

export const getLatLong = (placeId: any, coordinate: any) => {
//   fetch(
//     `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${googleApiKey}`,
//   ).then((res:any) => {
//       if(res){
//           coordinate(res?.geometry?.location)
//       }else{
//           coordinate(null)
//       }
//   });
  axios
        .get(
            `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=${googleApiKey}`,
        )
        .then((res: any) => coordinate(res?.data?.results[0]?.geometry?.location));
};



export const handleReverseGeocodeAddress = (arrAddress: any) => {
  for (let index in arrAddress) {
    let object = arrAddress[index];
    let showAddress = [];

    let addressData: any = {};

    if (object.country) {
      addressData['country'] = object.country;
    }

    if (object.locality) {
      addressData['city'] = object.locality;
    }

    if (object.adminArea && object.locality) {
      addressData['state'] = object.adminArea;
    } else if (object.adminArea) {
      addressData['city'] = object.adminArea;
    }

    if (object.streetName) {
      if (object.streetNumber) {
        addressData['address_line_2'] = object.streetNumber;
        showAddress.push(`${object.streetName},${object.streetNumber}`);
      } else {
        showAddress.push(object.streetName);
      }
      addressData['address_line_1'] = object.streetName;

      if (object.subLocality) {
        if (object.adminArea && object.adminArea !== object.subLocality) {
          addressData['address_line_3'] = object.subLocality;
        }
      }
    } else if (object.subLocality) {
      addressData['address_line_1'] = object.subLocality;
      showAddress.push(object.subLocality);
    }

    if (object.subAdminArea) {
      if (!addressData['address_line_1']) {
        addressData['address_line_1'] = object.subAdminArea;
        showAddress.push(object.subAdminArea);
      } else if (!addressData['address_line_3']) {
        addressData['address_line_3'] = object.subAdminArea;
      }
    }

    if (object.postalCode) {
      addressData['pin_code'] = object.postalCode;
    }

    if (object.position) {
      addressData['latitude'] = object.position.lat;
      addressData['longitude'] = object.position.lng;
    }
    console.log(addressData);
    if (validateGeocodeAddress(addressData)) {
      console.log('Found Valide Address');
      return {
        formatedAddress: showAddress.join(', '),
        searchAddressData: addressData,
      };
    }
  }
  return undefined;
};

const validateGeocodeAddress = (object: any) => {
  /*if ('address_line_1' in object && 'city' in object && 'country' in object) {
        return true
    }
    return false*/
  return true;
};