import { Box, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, styled, SxProps, Typography } from '@mui/material'
import { blueGrey } from '@mui/material/colors';
import { useState } from 'react';
import './Experiences.css'
import InfoIcon from '@mui/icons-material/Info';


const Experiences = () => {
 const [isWorkSecOpen, setIsWorkSecOpen] = useState(false)
 const [isEduSecOpen, setIsEduSecOpen] = useState(false)
 const [activeSec, setActiveSec] = useState(false)

  return (
    <Box sx={LayoutBox}>
      <Box className= {isEduSecOpen ? 'animation' : 'noAnimation' }>
      <svg width="108" height="85" viewBox="0 0 108 85" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9152 60.6757C11.9152 60.6757 13.5238 68.0941 23.588 66.197L25.2996 61.23L22.4047 57.458L14.3884 54.2878L11.9126 60.6768" fill="#34484C"/>
          <path d="M43.9895 46.767C43.9895 49.3957 42.8581 50.084 40.0152 51.5282L15.7108 63.8301C15.189 63.8303 14.6724 63.7071 14.1904 63.4677C13.7083 63.2283 13.2704 62.8773 12.9015 62.4349C12.5327 61.9924 12.2402 61.4671 12.0407 60.889C11.8413 60.311 11.7388 59.6914 11.7391 59.0658V18.1241C11.7391 15.4891 13.0281 14.616 15.7108 13.3576L40.0152 1.05569C41.0685 1.05541 42.0787 1.55669 42.8238 2.44933C43.5689 3.34196 43.9879 4.55286 43.9886 5.81579V46.766" fill="#1EA0CD"/>
          <path d="M13.949 63.3276C13.949 63.3276 23.058 66.463 23.588 66.1928C24.1207 65.9214 23.2491 61.4559 23.2491 61.4559L19.9545 57.2004L16.8879 57.0315L16.3482 57.9499L13.9482 63.3276" fill="#34484C"/>
          <path d="M39.4447 3.8881L12.484 17.4727L13.7474 26.1748L17.7578 26.6561L31.1527 24.0697L39.4808 18.8367L45.6112 8.77067C44.2712 5.88969 42.3052 4.10663 39.4455 3.8881" fill="#F4F5F5"/>
          <path d="M19.6261 20.4825C19.6261 19.7224 19.7352 19.1101 19.9545 18.5928C17.1978 18.2866 14.5926 17.327 12.6882 15.2727C12.0596 15.9673 11.7497 16.833 11.7497 18.123V59.0669C11.7492 59.6923 11.8516 60.3118 12.0509 60.8898C12.2502 61.4678 12.5425 61.993 12.9112 62.4355C13.2799 62.878 13.7177 63.229 14.1996 63.4684C14.6814 63.7079 15.198 63.8312 15.7196 63.8312L19.6428 61.8454C19.6317 61.7072 19.6259 61.5684 19.6252 61.4295V20.4825H19.6261Z" fill="#34484C"/>
          <path d="M52.5667 50.8019C52.5667 53.4358 51.4406 54.122 48.5941 55.5662L23.5916 66.1959C22.5378 66.1957 21.5273 65.6936 20.7822 64.8002C20.0371 63.9068 19.6184 62.6951 19.6181 61.4316V20.4856C19.6181 17.8549 20.9089 16.9786 23.5916 15.7234L48.5941 5.09264C49.6478 5.09292 50.6582 5.595 51.4032 6.48846C52.1482 7.38191 52.5667 8.59357 52.5667 9.85697V50.8019Z" fill="#57C6E9"/>
          <path d="M42.2145 17.5899C42.2402 17.669 42.2525 17.7533 42.2508 17.8381C42.2492 17.9229 42.2335 18.0065 42.2048 18.084C42.1761 18.1616 42.1348 18.2315 42.0835 18.2898C42.0321 18.3482 41.9716 18.3937 41.9055 18.4239L28.6074 24.5733C28.4746 24.6347 28.3269 24.6307 28.1966 24.5621C28.0663 24.4935 27.9639 24.3658 27.9118 24.207C27.8606 24.0469 27.8643 23.869 27.922 23.7122C27.9797 23.5554 28.0869 23.4323 28.22 23.3698L41.519 17.2236C41.5847 17.1928 41.6548 17.1779 41.7254 17.1797C41.7959 17.1815 41.8654 17.1999 41.93 17.234C41.9946 17.268 42.053 17.3169 42.1018 17.378C42.1506 17.4391 42.1889 17.5111 42.2145 17.5899M42.2145 20.5226C42.2399 20.6014 42.252 20.6854 42.2501 20.7698C42.2483 20.8543 42.2326 20.9374 42.2039 21.0145C42.1752 21.0916 42.134 21.1612 42.0828 21.2192C42.0316 21.2771 41.9713 21.3224 41.9055 21.3524L28.6074 27.5007C28.4766 27.5515 28.3345 27.5403 28.2104 27.4694C28.0863 27.3986 27.9895 27.2734 27.9399 27.1197C27.8903 26.9659 27.8917 26.7952 27.9438 26.6427C27.9959 26.4901 28.0947 26.3673 28.22 26.2993L41.519 20.151C41.6523 20.0901 41.8004 20.095 41.9307 20.1646C42.0611 20.2343 42.1631 20.363 42.2145 20.5226M37.6917 25.6406C37.7956 25.9742 37.7305 26.312 37.542 26.4007L28.4586 30.597C28.2711 30.6847 28.0325 30.4894 27.9242 30.1568C27.8185 29.8222 27.8837 29.4812 28.0721 29.3978L37.1538 25.1961C37.3448 25.1117 37.5834 25.308 37.6926 25.6395" fill="#198BA9"/>
          <path d="M28.3734 66.8831C28.3734 66.8831 30.3349 74.6615 42.6018 72.6693L44.6931 67.4619L41.1639 63.5074L31.394 60.1816L28.3766 66.8831" fill="#34484C"/>
          <path d="M67.466 52.3047C67.466 55.0606 66.0904 55.7866 62.6245 57.2974L33.0003 70.1968C31.7159 70.1971 30.4839 69.6711 29.5754 68.7347C28.6669 67.7982 28.1561 66.5278 28.1556 65.203V22.2681C28.1556 19.5089 29.7286 18.5936 33.0003 17.2754L62.6245 4.376C63.9087 4.37629 65.1401 4.90267 66.048 5.83935C66.956 6.77604 67.466 8.04633 67.466 9.37086V52.3058" fill="#78111F"/>
          <path d="M30.8499 69.6733C30.8499 69.6733 41.9537 72.9559 42.6007 72.6726C43.2488 72.3904 42.1865 67.7099 42.1865 67.7099L38.1702 63.244L34.4349 63.0658L33.7761 64.0298L30.8499 69.6733" fill="#34484C"/>
          <path d="M61.926 7.34657L29.0655 21.5874L30.6064 30.7149L35.4994 31.2174L51.8245 28.5091L61.9732 23.0207L69.4436 12.4676C67.8105 9.44833 65.4122 7.57567 61.926 7.34657" fill="#F4F5F5"/>
          <path d="M37.7699 24.7461C37.7699 23.9492 37.9083 23.3073 38.1702 22.7628C34.8105 22.4396 31.6354 21.4358 29.3177 19.2809C28.5504 20.0125 28.1695 20.9189 28.1695 22.2703V65.2052C28.1698 66.5298 28.6801 67.7999 29.5883 68.7364C30.4964 69.6729 31.728 70.199 33.0121 70.199L37.7914 68.116C37.778 67.9722 37.7708 67.8278 37.7699 67.6833V24.7461Z" fill="#34484C"/>
          <path d="M77.927 56.5359C77.927 59.2929 76.5514 60.0156 73.0855 61.5274L42.5985 72.6715C41.3154 72.6715 40.0849 72.1459 39.1774 71.2103C38.2699 70.2747 37.7598 69.0056 37.7592 67.6822V24.7461C37.7592 21.9892 39.329 21.0716 42.5985 19.7546L73.0855 8.60608C75.7573 8.60608 77.927 10.8418 77.927 13.5998V56.5359Z" fill="#BE202E"/>
          <path d="M65.3039 21.7091C65.3662 21.8765 65.3616 22.0625 65.2912 22.2264C65.2208 22.3902 65.0903 22.5187 64.9283 22.5835L48.7191 29.0282C48.639 29.0601 48.5536 29.0754 48.4677 29.0733C48.3819 29.0711 48.2973 29.0516 48.2188 29.0157C48.1403 28.9798 48.0694 28.9284 48.0101 28.8642C47.9509 28.8001 47.9045 28.7246 47.8736 28.642C47.8426 28.5593 47.8278 28.4712 47.8299 28.3827C47.8319 28.2941 47.8509 28.2069 47.8857 28.1259C47.9205 28.0449 47.9704 27.9718 48.0325 27.9107C48.0947 27.8496 48.1679 27.8017 48.2481 27.7698L64.4583 21.3262C64.5383 21.2939 64.6237 21.2783 64.7096 21.2802C64.7955 21.2821 64.8802 21.3015 64.9588 21.3373C65.0374 21.3731 65.1084 21.4245 65.1676 21.4887C65.2268 21.553 65.2731 21.6286 65.3039 21.7114M65.3039 24.7815C65.3662 24.9489 65.3616 25.1349 65.2912 25.2988C65.2208 25.4626 65.0903 25.5911 64.9283 25.6559L48.7191 32.0995C48.6385 32.1336 48.5521 32.1507 48.4651 32.1499C48.378 32.1491 48.2919 32.1303 48.2119 32.0948C48.1319 32.0592 48.0596 32.0076 47.9993 31.9428C47.9389 31.8781 47.8916 31.8016 47.8603 31.7178C47.8289 31.634 47.8141 31.5445 47.8167 31.4547C47.8193 31.3649 47.8392 31.2766 47.8753 31.1948C47.9115 31.1131 47.963 31.0396 48.027 30.9787C48.091 30.9177 48.1662 30.8706 48.2481 30.84L64.4583 24.3953C64.5384 24.3629 64.6239 24.3471 64.7099 24.349C64.7959 24.3509 64.8806 24.3704 64.9593 24.4063C65.0379 24.4423 65.1089 24.4939 65.168 24.5583C65.2272 24.6227 65.2733 24.6986 65.3039 24.7815M59.7939 30.1627C59.9237 30.5091 59.8443 30.8644 59.6136 30.9562L48.5431 35.3589C48.3124 35.4508 48.0195 35.2427 47.8897 34.8952C47.7609 34.5488 47.8424 34.1891 48.0721 34.0983L59.1425 29.6956C59.3743 29.6048 59.664 29.8107 59.7939 30.1627" fill="#78111F"/>
          <path d="M48.1075 68.7826C48.1075 68.7826 50.0579 76.8613 62.2775 74.7937L64.3502 69.3895L60.8359 65.2806L51.1098 61.8268L48.1055 68.7826" fill="#34484C"/>
          <path d="M87.0316 53.647C87.0316 56.5065 85.6657 57.2605 82.2106 58.827L52.7131 72.226C50.0497 72.2249 47.892 69.9067 47.892 67.0437V22.4585C47.892 19.5932 49.4589 18.6404 52.7131 17.2727L82.2095 3.8737C84.875 3.8737 87.0306 6.19881 87.0306 9.05952V53.647" fill="#AD7029"/>
          <path d="M50.572 71.6789C50.572 71.6789 61.6267 75.0902 62.2765 74.7948C62.918 74.5029 61.863 69.64 61.863 69.64L57.8647 65.0082L54.138 64.822L53.4841 65.8208L50.572 71.6789Z" fill="#34484C"/>
          <path d="M81.5183 6.96197L48.7926 21.7494L50.3274 31.2234L55.1972 31.7498L71.4574 28.935L81.5639 23.2366L89.0048 12.2788C87.3778 9.14342 84.99 7.20104 81.5183 6.96197" fill="#F4F5F5"/>
          <path d="M57.4606 25.0273C57.4606 24.1963 57.5994 23.5343 57.8658 22.97C54.5173 22.6321 51.3534 21.5908 49.0465 19.3553C48.2785 20.1139 47.9013 21.054 47.9013 22.4574V67.0414C47.9013 69.9032 50.0652 72.2237 52.7245 72.2237L57.4844 70.0641C57.4834 69.9113 57.4616 69.7653 57.4616 69.6113V25.0273" fill="#34484C"/>
          <path d="M97.449 58.0386C97.449 60.9016 96.0789 61.6533 92.6289 63.2221L62.2744 74.796C59.611 74.796 57.4492 72.4754 57.4492 69.6124V25.0273C57.4492 22.1654 59.0161 21.2138 62.2744 19.8392L92.6289 8.26877C95.2892 8.26877 97.449 10.5904 97.449 13.4546V58.0386" fill="#F79420"/>
          <path d="M84.8802 21.8758C84.9107 21.9626 84.9251 22.0553 84.9227 22.1484C84.9202 22.2416 84.901 22.3332 84.866 22.4179C84.831 22.5026 84.781 22.5786 84.719 22.6415C84.657 22.7043 84.5842 22.7527 84.505 22.7838L68.3639 29.4833C68.2037 29.5499 68.0264 29.5452 67.8692 29.4702C67.712 29.3952 67.587 29.2558 67.5204 29.081C67.4897 28.9944 67.475 28.9017 67.4772 28.8087C67.4795 28.7156 67.4986 28.624 67.5334 28.5393C67.5682 28.4546 67.618 28.3785 67.6799 28.3156C67.7417 28.2527 67.8143 28.2042 67.8934 28.173L84.0366 21.4747C84.1969 21.4076 84.3745 21.4121 84.5319 21.4874C84.6893 21.5626 84.8141 21.7027 84.8802 21.8781M84.8802 25.0641C84.9107 25.1509 84.9251 25.2436 84.9227 25.3367C84.9202 25.4298 84.901 25.5215 84.866 25.6061C84.831 25.6908 84.781 25.7669 84.719 25.8297C84.657 25.8926 84.5842 25.941 84.505 25.972L68.3639 32.66C68.2038 32.7281 68.026 32.7242 67.8684 32.6491C67.7109 32.5739 67.586 32.4335 67.5204 32.2578C67.4905 32.1715 67.4765 32.0794 67.4791 31.987C67.4817 31.8946 67.501 31.8037 67.5358 31.7196C67.5705 31.6356 67.6201 31.5601 67.6815 31.4976C67.7429 31.435 67.815 31.3868 67.8934 31.3555L84.0366 24.656C84.1968 24.5883 84.3744 24.5924 84.5319 24.6675C84.6894 24.7426 84.8144 24.8828 84.8802 25.0583M79.3938 30.6487C79.5233 31.0119 79.4445 31.3808 79.2145 31.4762L68.1909 36.0494C67.9608 36.1414 67.6706 35.9265 67.539 35.5667C67.4105 35.2058 67.4924 34.8334 67.7225 34.7369L78.7461 30.166C78.972 30.074 79.2632 30.2878 79.3938 30.6487" fill="#905A24"/>
          <g clip-path="url(#clip0_5_86)">
          <path d="M33.6741 75.3332C33.6741 76.4678 31.8758 77.387 29.6557 77.387H4.02258C1.80141 77.387 0 76.4678 0 75.3332V56.8323C0 55.6977 1.80141 54.7804 4.02258 54.7804H29.6557C31.8758 54.7804 33.6741 55.6983 33.6741 56.8323V75.3332" fill="#BB324A"/>
          <path d="M33.6741 73.8867C33.6741 75.0219 31.8758 75.9411 29.6557 75.9411H4.02258C1.80141 75.9411 0 75.0219 0 73.8867V55.3871C0 54.2537 1.80141 53.3345 4.02258 53.3345H29.6557C31.8758 53.3345 33.6741 54.2537 33.6741 55.3871V73.8867" fill="#DE374B"/>
          <path d="M33.3513 75.3332C33.3513 76.4678 35.1517 77.387 37.3718 77.387H63.007C65.2229 77.387 67.0243 76.4678 67.0243 75.3332V56.8323C67.0243 55.6977 65.2229 54.7804 63.007 54.7804H37.3739C35.1538 54.7804 33.3524 55.6983 33.3524 56.8323V75.3332" fill="#BB324A"/>
          <path d="M33.3513 73.8867C33.3513 75.0219 35.1517 75.9411 37.3718 75.9411H63.007C65.2229 75.9411 67.0243 75.0219 67.0243 73.8867V55.3871C67.0243 54.2537 65.2229 53.3345 63.007 53.3345H37.3739C35.1538 53.3345 33.3524 54.2537 33.3524 55.3871V73.8867" fill="#DE374B"/>
          <path d="M34.0242 73.6107C34.0242 74.7454 32.3283 75.6645 30.2337 75.6645H6.08765C3.99726 75.6645 2.30344 74.7454 2.30344 73.6107V55.1105C2.30344 53.9746 3.99726 53.0573 6.08765 53.0573H30.2347C32.3293 53.0573 34.0253 53.9753 34.0253 55.1105V73.6107" fill="#D0D1D2"/>
          <path d="M34.0242 72.163C34.0242 73.2989 32.3283 74.2168 30.2337 74.2168H6.08766C3.99726 74.2168 2.30344 73.2989 2.30344 72.163V53.6621C2.30344 52.5288 3.99726 51.6096 6.08766 51.6096H30.2347C32.3293 51.6096 34.0253 52.5288 34.0253 53.6621V72.163" fill="#E7E6E6"/>
          <path d="M7.07274 56.5822H28.5557C29.9995 56.5822 29.9995 55.3688 28.5557 55.3688H7.07274C5.62993 55.3688 5.62993 56.5822 7.07274 56.5822ZM7.07274 59.0437H28.5557C29.9995 59.0437 29.9995 57.8315 28.5557 57.8315H7.07274C5.62993 57.8315 5.62993 59.0437 7.07274 59.0437ZM7.07274 61.5618H28.5557C29.9995 61.5618 29.9995 60.3484 28.5557 60.3484H7.07274C5.62993 60.3484 5.62993 61.5618 7.07274 61.5618ZM7.07274 64.0251H28.5557C29.9995 64.0251 29.9995 62.8118 28.5557 62.8118H7.07274C5.62993 62.8118 5.62993 64.0251 7.07274 64.0251ZM7.07274 66.5729H28.5557C29.9995 66.5729 29.9995 65.3595 28.5557 65.3595H7.07274C5.62993 65.3595 5.62993 66.5729 7.07274 66.5729ZM7.07274 69.4514H28.5557C29.9995 69.4514 29.9995 68.238 28.5557 68.238H7.07274C5.62993 68.238 5.62993 69.4514 7.07274 69.4514Z" fill="#35494D"/>
          <path d="M65.7387 74.0001C65.7387 75.1347 64.0438 76.0533 61.9502 76.0533H37.8042C35.717 76.0533 34.019 75.1347 34.019 74.0001V55.4986C34.019 54.3652 35.717 53.4467 37.8042 53.4467H61.9502C64.0427 53.4467 65.7387 54.3652 65.7387 55.4986V74.0001Z" fill="#D0D1D2"/>
          <path d="M65.7387 72.551C65.7387 73.6844 64.0438 74.6036 61.9502 74.6036H37.8042C35.717 74.6036 34.019 73.6844 34.019 72.551V54.0477C34.019 52.9149 35.717 51.997 37.8042 51.997H61.9502C64.0427 51.997 65.7387 52.9149 65.7387 54.0477V72.551Z" fill="#E7E6E6"/>
          <path d="M38.7904 56.9703H60.2733C61.7171 56.9703 61.7171 55.7569 60.2733 55.7569H38.7904C37.3465 55.7569 37.3465 56.9703 38.7904 56.9703ZM38.7904 59.4343H60.2733C61.7171 59.4343 61.7171 58.2221 60.2733 58.2221H38.7904C37.3465 58.2221 37.3465 59.4343 38.7904 59.4343ZM38.7904 61.9518H60.2733C61.7171 61.9518 61.7171 60.7384 60.2733 60.7384H38.7904C37.3465 60.7384 37.3465 61.9518 38.7904 61.9518ZM38.7904 64.4176H60.2733C61.7171 64.4176 61.7171 63.203 60.2733 63.203H38.7904C37.3465 63.203 37.3465 64.4176 38.7904 64.4176ZM38.7904 66.9629H60.2733C61.7171 66.9629 61.7171 65.7488 60.2733 65.7488H38.7904C37.3465 65.7488 37.3465 66.9629 38.7904 66.9629ZM46.5223 69.8395H60.6477C61.5969 69.8395 61.5969 68.6255 60.6477 68.6255H46.5223C45.5741 68.6255 45.5741 69.8395 46.5223 69.8395" fill="#35494D"/>
          <g clip-path="url(#clip1_5_86)">
          <path d="M50.0409 52.331C49.6898 53.267 48.7811 54.239 47.9757 54.959C48.017 55.031 48.0996 55.247 48.1409 55.247C48.3681 55.067 48.5953 54.923 48.8224 54.743C49.2768 54.383 49.7311 53.915 50.1441 53.375C50.9702 52.223 51.2799 48.7669 51.8788 48.6949C52.2299 48.6949 52.5603 49.5949 52.8081 49.9909L53.1592 49.3789C53.1798 49.3429 52.8907 48.8749 52.8701 48.8389C52.519 48.2269 52.106 47.5789 51.5484 47.9389C50.805 48.4429 50.4539 51.287 50.0409 52.331M51.9614 48.7309C51.9614 48.7309 51.9821 48.7309 51.9614 48.7309ZM51.693 48.8029C51.6723 48.8029 51.6723 48.8029 51.693 48.8029ZM42.9575 68.8192C42.8955 68.9632 42.8749 69.1072 42.9162 69.1792C42.9575 69.2512 43.0607 69.2152 43.1227 69.1072L43.6183 68.4952L43.3086 67.9552L42.9575 68.8192Z" fill="#93A2AA"/>
          <path d="M48.3268 56.363L50.268 59.7471L55.1004 50.7469L53.4896 47.9389L48.3268 56.363Z" fill="#42ADE2"/>
          <path d="M44.4179 63.7413L48.4922 56.6391L50.0985 59.4393L46.0242 66.5414L44.4179 63.7413Z" fill="#42ADE2"/>
          <path d="M43.1434 67.6672L43.7835 68.7832L46.0345 66.5511L44.4237 63.7431L43.1434 67.6672ZM48.9257 55.319L50.8669 58.703L50.268 59.7471L48.3268 56.363L48.9257 55.319Z" fill="#C7D3D8"/>
          <path d="M53.5929 48.1189L54.9972 50.5669C55.3895 49.8829 55.3895 48.8029 54.9972 48.1189C54.6048 47.4349 53.9852 47.4349 53.5929 48.1189" fill="#42ADE2"/>
          <path d="M53.2114 48.2442L53.5034 47.7351L55.2266 50.739L54.9346 51.2481L53.2114 48.2442Z" fill="#C7D3D8"/>
          </g>
          </g>
          <defs>
          <clipPath id="clip0_5_86">
          <rect width="67.5" height="40.3205" fill="white" transform="translate(0 44.6795)"/>
          </clipPath>
          <clipPath id="clip1_5_86">
          <rect width="13.2168" height="23.0403" fill="white" transform="translate(42.4825 46.8949)"/>
          </clipPath>
          </defs>
      </svg>
    </Box>
      <Box className= {isWorkSecOpen ? 'workAnimation' : 'noAnimation' }>
        <img  className='workImage' src="https://kinsta.com/wp-content/uploads/2020/04/code-review-tools.png" alt="" />
      </Box>
     
    <Box sx={BoxStyle} className={isWorkSecOpen ? 'innerBox' : 'noBorderAnimation' } >
      {isWorkSecOpen ? 
       <Box className="education">
       <ImageList sx={imageListBox}>
        {workData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            className="edu-image"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.field}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
                
              </IconButton>
            }
          />
        </ImageListItem>
     ))}
   </ImageList>
     </Box> : 
     <Box >
        <Typography 
        // sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '350px'}} 
        sx={activeSec ? mainTextsActive : mainTexts}
        onClick={() => {
          isEduSecOpen ? setIsEduSecOpen(false) : setIsEduSecOpen(true);
          activeSec ? setActiveSec(false) : setActiveSec(true);
        }}>
        Education
        </Typography>
     </Box>
        
    }
    
    </Box>
    <Box sx={BoxStyle} className={isEduSecOpen ? 'innerBox' : 'noBorderAnimation' }>
      {isEduSecOpen ? 
      <Box className="education" >
        <ImageList sx={imageListBox}>
        {educationData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              className="edu-image"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.field}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                  
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
        </Box> : 
        <Box  >
          <Typography 
            sx= {activeSec ? mainTextsActive : mainTexts} 
            onClick={() => {
            isWorkSecOpen ? setIsWorkSecOpen(false) : setIsWorkSecOpen(true)
            activeSec ? setActiveSec(false) : setActiveSec(true);
            }}>
            Work
          </Typography>
      </Box> 
    }
    </Box>
    </Box>
  )
}

const LayoutBox: SxProps = {
  width: { xs: '100%', md: '100%',lg: '100%', xl: '100%'},
  paddingLeft: { xs: '0', md: '0',lg: '2em' },
  paddingTop: { xs: '10em', md: '0',lg: '0' },
  height: '100vh',
  display: 'flex',
  flexDirection: {xs: 'column', md: 'column', lg: 'row'},
  alignItems: 'center',
  justifyContent: 'space-between',
  textColor: blueGrey[900],
  zIndex: '1'
}
const BoxStyle: SxProps = {
  width: { xs: '100%', md: '80%',lg: '100%' },
  display: 'flex',
  alignItems: 'center',
  justifyContent: "center",
  height: '90vh',
}
const mainTexts: SxProps = {
  cursor: 'pointer',
  fontSize: { xs: '3em', md: '3em',lg: '5em' },
  webkitTextStroke: '0.2px #eceff0',
  fontFamily: 'Gentium Book Plus, serif',  
  color: 'rgba(10, 181, 248, 0.342)',
  zIndex: '10',
  p: '1em',
  borderRadius:'.4em',
  minWidth: { xs: '250px', md: '80%',lg: '350px' },
  display: 'flex',
  alignItems: 'center',
  justifyContent: "center",
  // backgroundColor: 'red',
  '&:hover': {
    boxShadow:  '2px 2px 15px 15px  rgba(33, 253, 253, 0.144)',
  }
}
const mainTextsActive: SxProps = {
  cursor: 'pointer',
  fontSize: { xs: '3em', md: '3em',lg: '4em' },
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  fontFamily: 'Gentium Book Plus, serif',  
  color: 'rgba(10, 181, 248, 0.342)',
  zIndex: '10',
  padding: '1em',
  borderRadius:'.4em',
  boxShadow:  '2px 2px 150px 150px  rgba(33, 253, 253, 0.068)',
  backgroundColor: '#02423d42',
  minWidth: { xs: '250px', md: '80%',lg: '350px' },
}
const imageListBox: SxProps = {
  width: { xs: '350px', md: '80%',lg: '800px',xl: '600px' },
  height: { xs: '340px', md: '80%',lg: '800px', xl: '600px' },
  borderRadius: '2em',
}





const educationData = [
  {
    img: 'https://storage.googleapis.com/ares-profile-pictures/hd/medieinstitutet-7f3bdbdf1dd4d7fd4246ab8b72ff30b5_hd.jpg',
    title: 'Medieinstitutet',
    field: 'Front-End Devloper',
    date: "September 2021 - May 2023",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://yellow.place/file/image/thumb/0/0/1304/djmrjyskgpdsmlya.jpg',
    title: 'goteborg tekniska college',
    field: 'Elinstallation',
  },
  {
    img: 'https://bloggcampusmolndal.files.wordpress.com/2017/12/campusmolndal_logo.jpg',
    title: 'campus mölndal',
    field: 'Front-End Devloper',
    date: "August 2019 – may 2019",
  },
  {
    img: 'https://storage.googleapis.com/ares-profile-pictures/hd/medieinstitutet-7f3bdbdf1dd4d7fd4246ab8b72ff30b5_hd.jpg',
    title: 'Medieinstitutet',
    field: 'Webbutvecklare inom e-handel',
    date: "September 2020 – january 2021",
    cols: 2,
  },
  
];
const workData = [
  {
    img: 'https://yt3.ggpht.com/ZNCwA8zByeJJAw7gzknCTGjbNIHokCksg275U8vsv4QB17LizNtnlhb2itZXivhQbPTGpH1J3aI=s900-c-k-c0x00ffffff-no-rj',
    title: 'VEOLIA',
    field: 'INTERNSHIP-Electrical installation',
    date: "Mars-2019",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://teflsearch.com/sites/default/files/im%20academy.jpg',
    title: 'IM Academy',
    field: 'Activity supervisor',
    date: 'May 2015 – August 2015'
  },
  {
    img: 'https://yellow.place/file/image/cover/0/0/2671/lpdqfrhaagwnsolp.jpg',
    title: 'HANIN CAFÉ',
    field: 'Owner',
    date: "January 2011 – October 2011",
  },
  {
    img: 'http://pharaon-group.com/data/uploads/sawa-logo.png',
    title: 'SAWA',
    field: 'Customer support',
    date: "January 2011 – October 2011",
    cols: 2,
  },
  
];
export default Experiences