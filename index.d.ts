declare module 'react-native-rs-address' {
  import * as React from 'react';
  import { WebViewProps } from 'react-native-webview';
  export interface OnCompleteParams {
    zonecode: number;
    address: string;
    addressEnglish: string;
    addressType: 'R' | 'J';
    userSelectedType: 'R' | 'J';
    noSelected: 'Y' | 'N';
    userLanguageType: 'K' | 'E';
    roadAddress: string;
    roadAddressEnglish: string;
    jibunAddress: string;
    jibunAddressEnglish: string;
    autoRoadAddress: string;
    autoRoadAddressEnglish: string;
    autoJibunAddress: string;
    autoJibunAddressEnglish: string;
    buildingCode: number;
    buildingName: string;
    apartment: 'Y' | 'N';
    sido: string;
    sigungu: string;
    sigunguCode: string;
    roadnameCode: string;
    bcode: string;
    roadname: string;
    bname: string;
    bname1: string;
    bname2: string;
    hname: string;
    query: string;
    postcode: string;
    postcode1: string;
    postcode2: string;
    postcodeSeq: string;
  };

  export interface PostcodeTheme {
    bgColor?: string;
    searchBgColor?: string;
    contentBgColor?: string;
    pageBgColor?: string;
    textColor?: string;
    queryTextColor?: string;
    postcodeTextColor?: string;
    emphTextColor?: string;
    outlineColor?: string;
  };
  
  export interface JSOptions {
      animation?: boolean;
      autoMapping?: boolean;
      shorthand?: boolean;
      pleaseReadGuide?: number;
      pleaseReadGuideTimer?: number;
      maxSuggestItems?: number;
      showMoreHName?: boolean;
      hideMapBtn?: boolean;
      hideEngBtn?: boolean;
      alwaysShowEngAddr?: boolean;
      zonecodeOnly?: boolean;
      theme?: PostcodeTheme;
    }

  export interface PostcodeProps extends WebViewProps {
    jsOptions?: JSOptions;
    
    onSelected: (data: OnCompleteParams) => void;
    onError: (error: unknown) => void;
  }

  declare const Postcode: React.FC<PostcodeProps>;

  export default Postcode;
}
