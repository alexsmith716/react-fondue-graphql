import React from "react";

interface SvgProps {
	className?: string;
}

function Svg({ className }: SvgProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="542"
			height="115"
			viewBox="0 0 542 115"
			className={className}
		>
			<g fillRule="evenodd">
				<path
					fillRule="nonzero"
					d="M111,83.56 L111,32.44 L133.248,32.44 C135.552012,32.44 137.67599,32.9199952 139.62,33.88 C141.56401,34.8400048 143.231993,36.0999922 144.624,37.66 C146.016007,39.2200078 147.107996,40.99599 147.9,42.988 C148.692004,44.98001 149.088,47.0079897 149.088,49.072 C149.088,50.8000086 148.848002,52.4559921 148.368,54.04 C147.887998,55.6240079 147.216004,57.0879933 146.352,58.432 C145.487996,59.7760067 144.432006,60.9399951 143.184,61.924 C141.935994,62.9080049 140.568007,63.6399976 139.08,64.12 L151.104,83.56 L141.96,83.56 L130.872,65.776 L119.064,65.776 L119.064,83.56 L111,83.56 Z M119.064,58.648 L133.176,58.648 C134.328006,58.648 135.371995,58.3960025 136.308,57.892 C137.244005,57.3879975 138.047997,56.6920044 138.72,55.804 C139.392003,54.9159956 139.919998,53.8960058 140.304,52.744 C140.688002,51.5919942 140.88,50.3680065 140.88,49.072 C140.88,47.7759935 140.652002,46.5520058 140.196,45.4 C139.739998,44.2479942 139.140004,43.2400043 138.396,42.376 C137.651996,41.5119957 136.788005,40.8280025 135.804,40.324 C134.819995,39.8199975 133.800005,39.568 132.744,39.568 L119.064,39.568 L119.064,58.648 Z M171.928,84.28 C168.999985,84.28 166.336012,83.7640052 163.936,82.732 C161.535988,81.6999948 159.484009,80.2960089 157.78,78.52 C156.075991,76.7439911 154.756005,74.6800118 153.82,72.328 C152.883995,69.9759882 152.416,67.4800132 152.416,64.84 C152.416,62.1999868 152.883995,59.6920119 153.82,57.316 C154.756005,54.9399881 156.075991,52.852009 157.78,51.052 C159.484009,49.251991 161.535988,47.8360052 163.936,46.804 C166.336012,45.7719948 169.023985,45.256 172,45.256 C174.928015,45.256 177.579988,45.7839947 179.956,46.84 C182.332012,47.8960053 184.359992,49.2999912 186.04,51.052 C187.720008,52.8040088 189.003996,54.8439884 189.892,57.172 C190.780004,59.5000116 191.224,61.9359873 191.224,64.48 C191.224,65.0560029 191.2,65.5959975 191.152,66.1 C191.104,66.6040025 191.056,67.0239983 191.008,67.36 L160.84,67.36 C160.984001,69.0400084 161.379997,70.5519933 162.028,71.896 C162.676003,73.2400067 163.515995,74.4039951 164.548,75.388 C165.580005,76.3720049 166.755993,77.1279974 168.076,77.656 C169.396007,78.1840026 170.775993,78.448 172.216,78.448 C173.272005,78.448 174.315995,78.3160013 175.348,78.052 C176.380005,77.7879987 177.327996,77.4040025 178.192,76.9 C179.056004,76.3959975 179.823997,75.7840036 180.496,75.064 C181.168003,74.3439964 181.695998,73.5520043 182.08,72.688 L188.848,74.632 C187.551994,77.4640142 185.404015,79.779991 182.404,81.58 C179.403985,83.380009 175.91202,84.28 171.928,84.28 Z M183.376,61.888 C183.231999,60.3039921 182.836003,58.8400067 182.188,57.496 C181.539997,56.1519933 180.712005,55.0120047 179.704,54.076 C178.695995,53.1399953 177.520007,52.4080026 176.176,51.88 C174.831993,51.3519974 173.416007,51.088 171.928,51.088 C170.439993,51.088 169.036007,51.3519974 167.716,51.88 C166.395993,52.4080026 165.232005,53.1399953 164.224,54.076 C163.215995,55.0120047 162.400003,56.1519933 161.776,57.496 C161.151997,58.8400067 160.768001,60.3039921 160.624,61.888 L183.376,61.888 Z M206.072,84.28 C204.247991,84.28 202.556008,83.980003 200.996,83.38 C199.435992,82.779997 198.092006,81.9520053 196.964,80.896 C195.835994,79.8399947 194.948003,78.5920072 194.3,77.152 C193.651997,75.7119928 193.328,74.1520084 193.328,72.472 C193.328,70.6959911 193.711996,69.0880072 194.48,67.648 C195.248004,66.2079928 196.339993,64.9600053 197.756,63.904 C199.172007,62.8479947 200.85199,62.0320029 202.796,61.456 C204.74001,60.8799971 206.887988,60.592 209.24,60.592 C211.016009,60.592 212.767991,60.7479984 214.496,61.06 C216.224009,61.3720016 217.783993,61.7919974 219.176,62.32 L219.176,59.728 C219.176,56.9439861 218.384008,54.7720078 216.8,53.212 C215.215992,51.6519922 212.936015,50.872 209.96,50.872 C207.94399,50.872 205.96401,51.2439963 204.02,51.988 C202.07599,52.7320037 200.07201,53.799993 198.008,55.192 L195.56,50.152 C200.408024,46.8879837 205.447974,45.256 210.68,45.256 C215.864026,45.256 219.895986,46.5759868 222.776,49.216 C225.656014,51.8560132 227.096,55.6479753 227.096,60.592 L227.096,74.2 C227.096,75.8800084 227.791993,76.7439998 229.184,76.792 L229.184,83.56 C228.415996,83.7040007 227.756003,83.7999998 227.204,83.848 C226.651997,83.8960002 226.112003,83.92 225.584,83.92 C224.047992,83.92 222.860004,83.5360038 222.02,82.768 C221.179996,81.9999962 220.664001,81.016006 220.472,79.816 L220.256,77.44 C218.575992,79.648011 216.500012,81.3399941 214.028,82.516 C211.555988,83.6920059 208.904014,84.28 206.072,84.28 Z M208.232,78.448 C210.15201,78.448 211.963992,78.1000035 213.668,77.404 C215.372009,76.7079965 216.703995,75.7360062 217.664,74.488 C218.672005,73.6239957 219.176,72.7120048 219.176,71.752 L219.176,66.784 C217.831993,66.2559974 216.404008,65.8480014 214.892,65.56 C213.379992,65.2719986 211.904007,65.128 210.464,65.128 C207.631986,65.128 205.316009,65.7399939 203.516,66.964 C201.715991,68.1880061 200.816,69.8079899 200.816,71.824 C200.816,73.6960094 201.511993,75.2679936 202.904,76.54 C204.296007,77.8120064 206.071989,78.448 208.232,78.448 Z M232.584,64.696 C232.584,62.0559868 233.039995,59.5600118 233.952,57.208 C234.864005,54.8559882 236.171992,52.7920089 237.876,51.016 C239.580009,49.2399911 241.631988,47.8360052 244.032,46.804 C246.432012,45.7719948 249.119985,45.256 252.096,45.256 C255.984019,45.256 259.331986,46.1079915 262.14,47.812 C264.948014,49.5160085 267.047993,51.7839858 268.44,54.616 L260.736,57.064 C259.823995,55.4799921 258.600008,54.2440044 257.064,53.356 C255.527992,52.4679956 253.824009,52.024 251.952,52.024 C250.367992,52.024 248.892007,52.3359969 247.524,52.96 C246.155993,53.5840031 244.968005,54.4599944 243.96,55.588 C242.951995,56.7160056 242.160003,58.0479923 241.584,59.584 C241.007997,61.1200077 240.72,62.8239906 240.72,64.696 C240.72,66.5200091 241.019997,68.2119922 241.62,69.772 C242.220003,71.3320078 243.035995,72.6879942 244.068,73.84 C245.100005,74.9920058 246.299993,75.8919968 247.668,76.54 C249.036007,77.1880032 250.487992,77.512 252.024,77.512 C252.984005,77.512 253.943995,77.3800013 254.904,77.116 C255.864005,76.8519987 256.739996,76.4800024 257.532,76 C258.324004,75.5199976 259.019997,74.9680031 259.62,74.344 C260.220003,73.7199969 260.663999,73.0480036 260.952,72.328 L268.728,74.632 C267.479994,77.4640142 265.392015,79.779991 262.464,81.58 C259.535985,83.380009 256.08002,84.28 252.096,84.28 C249.167985,84.28 246.504012,83.7520053 244.104,82.696 C241.703988,81.6399947 239.652009,80.212009 237.948,78.412 C236.243992,76.611991 234.924005,74.5360118 233.988,72.184 C233.051995,69.8319882 232.584,67.3360132 232.584,64.696 Z M294.592,81.616 C293.583995,82.0960024 292.192009,82.635997 290.416,83.236 C288.639991,83.836003 286.74401,84.136 284.728,84.136 C283.479994,84.136 282.304006,83.9680017 281.2,83.632 C280.095995,83.2959983 279.124004,82.7920034 278.284,82.12 C277.443996,81.4479966 276.784002,80.5720054 276.304,79.492 C275.823998,78.4119946 275.584,77.1040077 275.584,75.568 L275.584,52.024 L270.616,52.024 L270.616,45.904 L275.584,45.904 L275.584,33.52 L283.504,33.52 L283.504,45.904 L291.712,45.904 L291.712,52.024 L283.504,52.024 L283.504,73.048 C283.600001,74.3920067 284.019996,75.363997 284.764,75.964 C285.508004,76.564003 286.431995,76.864 287.536,76.864 C288.640006,76.864 289.695995,76.6720019 290.704,76.288 C291.712005,75.9039981 292.455998,75.5920012 292.936,75.352 L294.592,81.616 Z M299.432,83.56 L299.432,32.44 L333.488,32.44 L333.488,39.568 L307.496,39.568 L307.496,54.832 L329.24,54.832 L329.24,61.528 L307.496,61.528 L307.496,83.56 L299.432,83.56 Z M352.944,84.28 C349.967985,84.28 347.292012,83.7520053 344.916,82.696 C342.539988,81.6399947 340.512008,80.2240089 338.832,78.448 C337.151992,76.6719911 335.856005,74.5960119 334.944,72.22 C334.031996,69.8439881 333.576,67.360013 333.576,64.768 C333.576,62.175987 334.031996,59.6920119 334.944,57.316 C335.856005,54.9399881 337.163992,52.8640089 338.868,51.088 C340.572009,49.3119911 342.611988,47.8960053 344.988,46.84 C347.364012,45.7839947 350.015985,45.256 352.944,45.256 C355.872015,45.256 358.523988,45.7839947 360.9,46.84 C363.276012,47.8960053 365.315992,49.3119911 367.02,51.088 C368.724009,52.8640089 370.031996,54.9399881 370.944,57.316 C371.856005,59.6920119 372.312,62.175987 372.312,64.768 C372.312,67.360013 371.856005,69.8439881 370.944,72.22 C370.031996,74.5960119 368.724009,76.6719911 367.02,78.448 C365.315992,80.2240089 363.276012,81.6399947 360.9,82.696 C358.523988,83.7520053 355.872015,84.28 352.944,84.28 Z M341.712,64.84 C341.712,66.6640091 341.999997,68.3439923 342.576,69.88 C343.152003,71.4160077 343.943995,72.7479944 344.952,73.876 C345.960005,75.0040056 347.147993,75.8919968 348.516,76.54 C349.884007,77.1880032 351.359992,77.512 352.944,77.512 C354.528008,77.512 356.003993,77.1880032 357.372,76.54 C358.740007,75.8919968 359.927995,74.9920058 360.936,73.84 C361.944005,72.6879942 362.735997,71.3440077 363.312,69.808 C363.888003,68.2719923 364.176,66.5920091 364.176,64.768 C364.176,62.9919911 363.888003,61.3240078 363.312,59.764 C362.735997,58.2039922 361.944005,56.8480058 360.936,55.696 C359.927995,54.5439942 358.740007,53.6440032 357.372,52.996 C356.003993,52.3479968 354.528008,52.024 352.944,52.024 C351.407992,52.024 349.956007,52.3599966 348.588,53.032 C347.219993,53.7040034 346.032005,54.6159942 345.024,55.768 C344.015995,56.9200058 343.212003,58.2759922 342.612,59.836 C342.011997,61.3960078 341.712,63.0639911 341.712,64.84 Z M411.496,83.56 L403.576,83.56 L403.576,62.464 C403.576,58.9119822 403.012006,56.332008 401.884,54.724 C400.755994,53.115992 399.088011,52.312 396.88,52.312 C395.727994,52.312 394.576006,52.5279978 393.424,52.96 C392.271994,53.3920022 391.192005,54.003996 390.184,54.796 C389.175995,55.588004 388.276004,56.5239946 387.484,57.604 C386.691996,58.6840054 386.080002,59.8719935 385.648,61.168 L385.648,83.56 L377.728,83.56 L377.728,45.904 L384.928,45.904 L384.928,53.464 C386.368007,50.9199873 388.455986,48.9160073 391.192,47.452 C393.928014,45.9879927 396.951984,45.256 400.264,45.256 C402.520011,45.256 404.367993,45.6639959 405.808,46.48 C407.248007,47.2960041 408.387996,48.4119929 409.228,49.828 C410.068004,51.2440071 410.655998,52.8759908 410.992,54.724 C411.328002,56.5720092 411.496,58.5279897 411.496,60.592 L411.496,83.56 Z M434.408,84.28 C431.863987,84.28 429.512011,83.7640052 427.352,82.732 C425.191989,81.6999948 423.320008,80.2960089 421.736,78.52 C420.151992,76.7439911 418.916005,74.6680119 418.028,72.292 C417.139996,69.9159881 416.696,67.3600137 416.696,64.624 C416.696,61.9839868 417.115996,59.5000116 417.956,57.172 C418.796004,54.8439884 419.971993,52.7920089 421.484,51.016 C422.996008,49.2399911 424.77199,47.8360052 426.812,46.804 C428.85201,45.7719948 431.095988,45.256 433.544,45.256 C436.568015,45.256 439.231989,45.9879927 441.536,47.452 C443.840012,48.9160073 445.639994,50.7759887 446.936,53.032 L446.936,31 L454.856,31 L454.856,74.2 C454.856,75.1120046 455.011999,75.7599981 455.324,76.144 C455.636002,76.5280019 456.199996,76.7439998 457.016,76.792 L457.016,83.56 C456.199996,83.7040007 455.540003,83.7999998 455.036,83.848 C454.531998,83.8960002 454.112002,83.92 453.776,83.92 C452.191992,83.92 450.896005,83.5120041 449.888,82.696 C448.879995,81.8799959 448.328001,80.8240065 448.232,79.528 L448.088,76.72 C446.695993,79.0720118 444.800012,80.9199933 442.4,82.264 C439.999988,83.6080067 437.336015,84.28 434.408,84.28 Z M436.352,77.512 C437.504006,77.512 438.655994,77.3200019 439.808,76.936 C440.960006,76.5519981 442.015995,76.0240034 442.976,75.352 C443.936005,74.6799966 444.763997,73.8880046 445.46,72.976 C446.156004,72.0639954 446.647999,71.0800053 446.936,70.024 L446.936,60.16 C446.503998,58.959994 445.892004,57.856005 445.1,56.848 C444.307996,55.839995 443.408005,54.9760036 442.4,54.256 C441.391995,53.5359964 440.324006,52.9840019 439.196,52.6 C438.067994,52.2159981 436.928006,52.024 435.776,52.024 C434.191992,52.024 432.740007,52.3839964 431.42,53.104 C430.099994,53.8240036 428.960005,54.783994 428,55.984 C427.039995,57.184006 426.284003,58.5519923 425.732,60.088 C425.179997,61.6240077 424.904,63.2079918 424.904,64.84 C424.904,66.5680086 425.203997,68.1999923 425.804,69.736 C426.404003,71.2720077 427.231995,72.6159942 428.288,73.768 C429.344005,74.9200058 430.555993,75.8319966 431.924,76.504 C433.292007,77.1760034 434.767992,77.512 436.352,77.512 Z M474.888,84.28 C470.95198,84.28 467.97601,82.9960128 465.96,80.428 C463.94399,77.8599872 462.936,74.0320254 462.936,68.944 L462.936,45.904 L470.856,45.904 L470.856,67.36 C470.856,74.1280338 473.255976,77.512 478.056,77.512 C480.312011,77.512 482.44799,76.816007 484.464,75.424 C486.48001,74.031993 488.039995,72.0160132 489.144,69.376 L489.144,45.904 L497.064,45.904 L497.064,74.2 C497.064,75.1120046 497.219999,75.7599981 497.532,76.144 C497.844002,76.5280019 498.407996,76.7439998 499.224,76.792 L499.224,83.56 C498.407996,83.7040007 497.736003,83.7999998 497.208,83.848 C496.679997,83.8960002 496.176003,83.92 495.696,83.92 C494.255993,83.92 493.032005,83.524004 492.024,82.732 C491.015995,81.939996 490.488,80.9200062 490.44,79.672 L490.296,75.928 C488.615992,78.6640137 486.432014,80.7399929 483.744,82.156 C481.055987,83.5720071 478.104016,84.28 474.888,84.28 Z M522.568,84.28 C519.639986,84.28 516.976012,83.7640052 514.576,82.732 C512.175988,81.6999948 510.124009,80.2960089 508.42,78.52 C506.715992,76.7439911 505.396005,74.6800118 504.46,72.328 C503.523995,69.9759882 503.056,67.4800132 503.056,64.84 C503.056,62.1999868 503.523995,59.6920119 504.46,57.316 C505.396005,54.9399881 506.715992,52.852009 508.42,51.052 C510.124009,49.251991 512.175988,47.8360052 514.576,46.804 C516.976012,45.7719948 519.663985,45.256 522.64,45.256 C525.568015,45.256 528.219988,45.7839947 530.596,46.84 C532.972012,47.8960053 534.999992,49.2999912 536.68,51.052 C538.360009,52.8040088 539.643996,54.8439884 540.532,57.172 C541.420005,59.5000116 541.864,61.9359873 541.864,64.48 C541.864,65.0560029 541.84,65.5959975 541.792,66.1 C541.744,66.6040025 541.696,67.0239983 541.648,67.36 L511.48,67.36 C511.624001,69.0400084 512.019997,70.5519933 512.668,71.896 C513.316003,73.2400067 514.155995,74.4039951 515.188,75.388 C516.220005,76.3720049 517.395994,77.1279974 518.716,77.656 C520.036007,78.1840026 521.415993,78.448 522.856,78.448 C523.912005,78.448 524.955995,78.3160013 525.988,78.052 C527.020005,77.7879987 527.967996,77.4040025 528.832,76.9 C529.696004,76.3959975 530.463997,75.7840036 531.136,75.064 C531.808004,74.3439964 532.335998,73.5520043 532.72,72.688 L539.488,74.632 C538.191994,77.4640142 536.044015,79.779991 533.044,81.58 C530.043985,83.380009 526.55202,84.28 522.568,84.28 Z M534.016,61.888 C533.871999,60.3039921 533.476003,58.8400067 532.828,57.496 C532.179997,56.1519933 531.352005,55.0120047 530.344,54.076 C529.335995,53.1399953 528.160007,52.4080026 526.816,51.88 C525.471993,51.3519974 524.056008,51.088 522.568,51.088 C521.079993,51.088 519.676007,51.3519974 518.356,51.88 C517.035994,52.4080026 515.872005,53.1399953 514.864,54.076 C513.855995,55.0120047 513.040003,56.1519933 512.416,57.496 C511.791997,58.8400067 511.408001,60.3039921 511.264,61.888 L534.016,61.888 Z"
				/>
				<path d="M58.9310751,82.5871592 L65.4831301,107.113783 L65.4008655,107.135893 C65.4064926,107.198372 65.4093224,107.261039 65.4093224,107.323883 C65.4093224,111.513614 52.8320202,114.910061 37.3171316,114.910061 C21.802243,114.910061 9.2249408,111.513614 9.2249408,107.323883 C9.2249408,106.931371 9.33532868,106.545822 9.54817825,106.169375 L15.7195007,83.0679651 C1.98626938,77.3397037 1.12142422,66.4107821 1.12142422,61.2649485 C1.12142422,56.5687434 2.56204939,50.0663055 5.44329973,41.7576349 C4.72298714,40.6738952 4.36283085,39.4095323 4.36283085,37.9645461 C4.36283085,36.7440251 5.73324818,32.430731 11.9466899,28.8947964 L14.6835641,33.6495515 C11.9147852,34.9680403 10.3054097,36.5433214 10.3054097,38.235481 C10.3054097,42.8741108 22.3989695,46.6344633 37.3171316,46.6344633 C52.2352937,46.6344633 64.3288535,42.8741108 64.3288535,38.235481 C64.3288535,36.5711381 62.7719549,35.0198627 60.0863018,33.7147814 L62.5392865,29.4532257 C67.9596189,32.8717657 69.1909635,36.807612 69.1909635,37.9645461 C69.1909635,39.4095323 68.8308072,40.6738952 68.1104946,41.7576349 C70.9917449,50.0663055 72.4323701,56.5687434 72.4323701,61.2649485 C72.4323701,66.2702275 71.6141249,76.7469875 58.9310751,82.5871592 Z M52.8000264,84.7599986 C48.4769486,85.909596 43.2050613,86.630487 36.7768972,86.7328302 C30.9069513,86.6393744 26.0011809,86.030135 21.9016101,85.0496668 L17.3789081,101.979716 C20.7575109,101.060541 25.0017197,100.373711 29.7538495,100.015817 L29.7538495,96.3190077 C29.7538495,95.2144382 30.64928,94.3190077 31.7538495,94.3190077 L42.8804137,94.3190077 C43.9849832,94.3190077 44.8804137,95.2144382 44.8804137,96.3190077 L44.8804137,100.015817 C49.7060679,100.379248 54.0079626,101.081873 57.4115522,102.022546 L52.8000264,84.7599986 Z M52.3707042,25.4442501 L49.3385194,30.7120466 C45.7180538,30.1516577 41.6359591,29.8364988 37.3171316,29.8364988 C33.0614466,29.8364988 29.0356229,30.1425096 25.454836,30.687625 L22.2956508,25.1991915 C26.2307031,24.3797994 31.0014522,23.8759307 36.7768972,23.8759307 C43.1079175,23.8759307 48.2316491,24.4814024 52.3707042,25.4442501 Z M15.7018442,20.1786652 L25.3404733,36.923798 L21.5976194,39.0912773 L11.8951261,22.2351937 C10.8597416,22.2351513 9.85252945,21.6985503 9.29633349,20.7380981 C9.2950217,20.7358329 9.29371287,20.7335659 9.29240701,20.7312973 L0.40046134,5.28337316 C-0.424558998,3.85007025 0.0659569883,2.01943243 1.49709537,1.19066304 L2.85485353,0.40438799 C4.28864508,-0.425917846 6.12405866,0.0633039908 6.9543645,1.49709555 C6.95567629,1.49936078 6.95698512,1.50162773 6.95829098,1.50389639 L15.8502366,16.9518205 C16.4518523,17.9970037 16.3539292,19.2534704 15.7018442,20.1786652 Z M59.3811528,20.1786652 C58.7290678,19.2534704 58.6311448,17.9970037 59.2327604,16.9518205 L68.1247061,1.50389639 C68.1260119,1.50162773 68.1273207,1.49936078 68.1286325,1.49709555 C68.9589384,0.0633039908 70.7943519,-0.425917846 72.2281435,0.40438799 L73.5859017,1.19066304 C75.01704,2.01943243 75.507556,3.85007025 74.6825357,5.28337316 L65.79059,20.7312973 C65.7892842,20.7335659 65.7879753,20.7358329 65.7866635,20.7380981 C65.2304676,21.6985503 64.2232555,22.2351513 63.1878709,22.2351937 L53.4853777,39.0912773 L49.7425237,36.923798 L59.3811528,20.1786652 Z M22.1905673,80.7722621 C31.0285471,83.5132262 14.6272852,79.1466527 9.97973581,65.0203568 C7.49458571,56.2101153 13.618904,55.4269827 9.97973581,51.1197535 C6.34056766,46.8125244 3.99870848,59.9952763 6.15964623,66.4977141 C8.32058399,73.000152 13.3525875,78.0312981 22.1905673,80.7722621 Z" />
			</g>
		</svg>
	);
}

export default Svg;
