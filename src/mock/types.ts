export interface Country {
  name?: string;
  alpha3Code: string;
  population?: number;
  region?: string;
  capital?: string;
  flag?: string;
  nativeName?: string;
  subRegion?: string;
  topLevelDomain?: string;
  currencies?: string[];
  languages?: string[];
  borders?: string[];
}

// export interface Data {
//   name?: string;
//   topLevelDomain?: string[];
//   alpha2Code?: string;
//   alpha3Code?: string;
//   callingCodes?: string[];
//   capital?: string;
//   altSpellings?: string[];
//   subregion?: string;
//   region?: string;
//   population?: number;
//   latlng?: number[];
//   demonym?: string;
//   area?: number;
//   timezones?: string[];
//   borders?: string[];
//   nativeName?: string;
//   numericCode?: string;
//   flags?: {
//     svg?: string;
//     png?: string;
//   };
//   currencies?: [
//     {
//       code?: string;
//       name?: string;
//       symbol?: string;
//     }
//   ];
//   languages?: [
//     {
//       iso639_1?: string;
//       iso639_2?: string;
//       name?: string;
//       nativeName?: string;
//     },
//     {
//       iso639_1?: string;
//       iso639_2?: string;
//       name?: string;
//       nativeName?: string;
//     },
//     {
//       iso639_1?: string;
//       iso639_2?: string;
//       name?: string;
//       nativeName?: string;
//     }
//   ];
//   translations?: {};
//   flag?: string;
//   regionalBlocs?: [
//     {
//       acronym?: string;
//       name?: string;
//     }
//   ];
//   cioc?: string;
//   independent?: boolean;
// }
