(() => {
  var BASELINE_1P = {
    light: {
        background: "#FFFFFF",
        surface: "#FFFFFF"
    },
    dark: {},
    neutral: {
        luminance100: "#FFFFFF",
        luminance99: "#FDFCFB",
        luminance98: "#FAF9F9",
        luminance95: "#F2F2F2",
        luminance90: "#E3E3E3",
        luminance80: "#C7C7C7",
        luminance70: "#ABABAB",
        luminance60: "#8F8F8F",
        luminance50: "#757575",
        luminance40: "#5E5E5E",
        luminance35: "#525252",
        luminance30: "#474747",
        luminance25: "#3A3C3C",
        luminance20: "#303030",
        luminance10: "#1F1F1F",
        luminance0: "#000000"
    },
    neutralVariant: {
        luminance100: "#FFFFFF",
        luminance99: "#FAFDFB",
        luminance98: "#F8FAF8",
        luminance95: "#EFF2EF",
        luminance90: "#E1E3E1",
        luminance80: "#C4C7C5",
        luminance70: "#A9ACAA",
        luminance60: "#8E918F",
        luminance50: "#747775",
        luminance40: "#5C5F5E",
        luminance35: "#4F5351",
        luminance30: "#444746",
        luminance25: "#393C3B",
        luminance20: "#2D312F",
        luminance10: "#191D1C",
        luminance0: "#000000"
    },
    primary: {
        luminance100: "#FFFFFF",
        luminance99: "#FAFBFF",
        luminance98: "#F8F9FF",
        luminance95: "#ECF3FE",
        luminance90: "#D3E3FD",
        luminance80: "#A8C7FA",
        luminance70: "#7CACF8",
        luminance60: "#4C8DF6",
        luminance50: "#1B6EF3",
        luminance40: "#0B57D0",
        luminance35: "#155298",
        luminance30: "#0842A0",
        luminance25: "#003B77",
        luminance20: "#062E6F",
        luminance10: "#041E49",
        luminance0: "#000000"
    },
    secondary: {
        luminance100: "#FFFFFF",
        luminance99: "#F7FCFF",
        luminance98: "#E3FFF6",
        luminance95: "#DFF3FF",
        luminance90: "#C2E7FF",
        luminance80: "#7FCFFF",
        luminance70: "#5AB3F0",
        luminance60: "#3998D3",
        luminance50: "#047DB7",
        luminance40: "#00639B",
        luminance35: "#005E4E",
        luminance30: "#004A77",
        luminance25: "#004438",
        luminance20: "#003355",
        luminance10: "#001D35",
        luminance0: "#000000"
    },
    tertiary: {
        luminance100: "#FFFFFF",
        luminance99: "#F2FFEE",
        luminance98: "#E8FFE7",
        luminance95: "#E7F8ED",
        luminance90: "#C4EED0",
        luminance80: "#6DD58C",
        luminance70: "#37BE5F",
        luminance60: "#1EA446",
        luminance50: "#198639",
        luminance40: "#146C2E",
        luminance35: "#006024",
        luminance30: "#0F5223",
        luminance25: "#004618",
        luminance20: "#0A3818",
        luminance10: "#072711",
        luminance0: "#000000"
    },
    error: {
        luminance100: "#FFFFFF",
        luminance99: "#FFFBF9",
        luminance98: "#FFF8F6",
        luminance95: "#FCEEEE",
        luminance90: "#F9DEDC",
        luminance80: "#F2B8B5",
        luminance70: "#EC928E",
        luminance60: "#E46962",
        luminance50: "#DC362E",
        luminance40: "#B3261E",
        luminance35: "#833D3B",
        luminance30: "#8C1D18",
        luminance25: "#662726",
        luminance20: "#601410",
        luminance10: "#410E0B",
        luminance0: "#000000"
    },
    styles: {
        display1: {
            fontFamilyName: "Google Sans Text",
            fontFamilyStyle: "Regular",
            fontSize: 64,
            lineHeight: 76,
            letterSpacing: 0,
            paragraphSpacing: 0
        },
        display2: {
            fontFamilyName: "Google Sans Text",
            fontFamilyStyle: "Regular",
            fontSize: 57,
            lineHeight: 64,
            letterSpacing: 0,
            paragraphSpacing: 0
        },
        display3: {
            fontFamilyName: "Google Sans Text",
            fontFamilyStyle: "Regular",
            fontSize: 45,
            lineHeight: 52,
            letterSpacing: 0,
            paragraphSpacing: 0
        },
        headline1: {
            fontFamilyName: "Google Sans Text",
            fontFamilyStyle: "Regular",
            fontSize: 36,
            lineHeight: 44,
            letterSpacing: 0,
            paragraphSpacing: 0
        },
        headline2: {
            fontFamilyName: "Google Sans Text",
            fontFamilyStyle: "Regular",
            fontSize: 32,
            lineHeight: 40,
            letterSpacing: 0,
            paragraphSpacing: 0
        },
        headline3: {
            fontFamilyName: "Google Sans Text",
            fontFamilyStyle: "Regular",
            fontSize: 28,
            lineHeight: 36,
            letterSpacing: 0,
            paragraphSpacing: 0
        },
        headline4: {
            fontFamilyName: "Google Sans Text",
            fontFamilyStyle: "Regular",
            fontSize: 24,
            lineHeight: 32,
            letterSpacing: 0,
            paragraphSpacing: 0
        },
        headline5: {
            fontFamilyName: "Google Sans Text",
            fontFamilyStyle: "Regular",
            fontSize: 22,
            lineHeight: 28,
            letterSpacing: 0,
            paragraphSpacing: 0
        },
        headline6: {
            fontFamilyName: "Google Sans Text",
            fontFamilyStyle: "Regular",
            fontSize: 18,
            lineHeight: 24,
            letterSpacing: 0,
            paragraphSpacing: 0
        },
        subhead1: {
            fontFamilyName: "Google Sans Text",
            fontFamilyStyle: "Medium",
            fontSize: 16,
            lineHeight: 24,
            letterSpacing: 0,
            paragraphSpacing: 0
        },
        subhead2: {
            fontFamilyName: "Google Sans Text",
            fontFamilyStyle: "Medium",
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: 0,
            paragraphSpacing: 0
        },
        button: {
            fontFamilyName: "Google Sans Text",
            fontFamilyStyle: "Medium",
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: 0,
            paragraphSpacing: 0
        },
        body1: {
            fontFamilyName: "Google Sans Text",
            fontFamilyStyle: "Regular",
            fontSize: 16,
            lineHeight: 24,
            letterSpacing: 0,
            paragraphSpacing: 0
        },
        body2: {
            fontFamilyName: "Google Sans Text",
            fontFamilyStyle: "Regular",
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: 0,
            paragraphSpacing: 0
        },
        caption: {
            fontFamilyName: "Google Sans Text",
            fontFamilyStyle: "Regular",
            fontSize: 12,
            lineHeight: 16,
            letterSpacing: .1,
            paragraphSpacing: 0
        },
        overline: {
            fontFamilyName: "Google Sans Text",
            fontFamilyStyle: "Medium",
            fontSize: 12,
            lineHeight: 16,
            letterSpacing: .1,
            paragraphSpacing: 0
        },
        labelSmall: {
            fontFamilyName: "Google Sans Text",
            fontFamilyStyle: "Medium",
            fontSize: 11,
            lineHeight: 16,
            letterSpacing: .1,
            paragraphSpacing: 0
        }
    }
  };

  const BASELINE_3P = {
    light: {},
    dark: {},
    neutral: {
        luminance100: "#FFFFFF",
        luminance99: "#FFFBFE",
        luminance98: "#FDF8FC",
        luminance95: "#F4EFF4",
        luminance90: "#E6E1E5",
        luminance80: "#C9C5CA",
        luminance70: "#AEAAAE",
        luminance60: "#939094",
        luminance50: "#787579",
        luminance40: "#605D62",
        luminance35: "#545255",
        luminance30: "#484649",
        luminance25: "#3D3B3E",
        luminance20: "#313033",
        luminance10: "#1C1B1F",
        luminance0: "#000000"
    },
    neutralVariant: {
        luminance100: "#FFFFFF",
        luminance99: "#FFFBFE",
        luminance98: "#FEF7FF",
        luminance95: "#F5EEFA",
        luminance90: "#E7E0EC",
        luminance80: "#CAC4D0",
        luminance70: "#AEA9B4",
        luminance60: "#938F99",
        luminance50: "#79747E",
        luminance40: "#605D66",
        luminance35: "#54515A",
        luminance30: "#49454F",
        luminance25: "#3D3A43",
        luminance20: "#322F37",
        luminance10: "#1D1A22",
        luminance0: "#000000"
    },
    primary: {
        luminance100: "#FFFFFF",
        luminance99: "#FFFBFE",
        luminance98: "#FEF7FF",
        luminance95: "#F6EDFF",
        luminance90: "#EADDFF",
        luminance80: "#D0BCFF",
        luminance70: "#B69DF8",
        luminance60: "#9A82DB",
        luminance50: "#7F67BE",
        luminance40: "#6750A4",
        luminance35: "#5B4497",
        luminance30: "#4F378B",
        luminance25: "#432B7E",
        luminance20: "#381E72",
        luminance10: "#21005D",
        luminance0: "#000000"
    },
    secondary: {
        luminance100: "#FFFFFF",
        luminance99: "#FFFBFE",
        luminance98: "#FEF7FF",
        luminance95: "#F6EDFF",
        luminance90: "#E8DEF8",
        luminance80: "#CCC2DC",
        luminance70: "#B0A7C0",
        luminance60: "#958DA5",
        luminance50: "#7A7289",
        luminance40: "#625B71",
        luminance35: "#564F65",
        luminance30: "#4A4458",
        luminance25: "#3E384D",
        luminance20: "#332D41",
        luminance10: "#1D192B",
        luminance0: "#000000"
    },
    tertiary: {
        luminance100: "#FFFFFF",
        luminance99: "#FFFBFA",
        luminance98: "#FFF8F9",
        luminance95: "#FFECF1",
        luminance90: "#FFD8E4",
        luminance80: "#EFB8C8",
        luminance70: "#D29DAC",
        luminance60: "#B58392",
        luminance50: "#986977",
        luminance40: "#7D5260",
        luminance35: "#704653",
        luminance30: "#633B48",
        luminance25: "#57303D",
        luminance20: "#492532",
        luminance10: "#31111D",
        luminance0: "#000000"
    },
    error: {
        luminance100: "#FFFFFF",
        luminance99: "#FFFBF9",
        luminance98: "#FFF8F6",
        luminance95: "#FCEEEE",
        luminance90: "#F9DEDC",
        luminance80: "#F2B8B5",
        luminance70: "#EC928E",
        luminance60: "#E46962",
        luminance50: "#DC362E",
        luminance40: "#B3261E",
        luminance35: "#833D3B",
        luminance30: "#8C1D18",
        luminance25: "#662726",
        luminance20: "#601410",
        luminance10: "#410E0B",
        luminance0: "#000000"
    },
    styles: {
        display1: {
            fontFamilyName: "Roboto",
            fontFamilyStyle: "Regular",
            fontSize: 64,
            lineHeight: 76,
            letterSpacing: -.5,
            paragraphSpacing: 0
        },
        display2: {
            fontFamilyName: "Roboto",
            fontFamilyStyle: "Regular",
            fontSize: 57,
            lineHeight: 64,
            letterSpacing: -.25,
            paragraphSpacing: 0
        },
        display3: {
            fontFamilyName: "Roboto",
            fontFamilyStyle: "Regular",
            fontSize: 45,
            lineHeight: 52,
            letterSpacing: 0,
            paragraphSpacing: 0
        },
        headline1: {
            fontFamilyName: "Roboto",
            fontFamilyStyle: "Regular",
            fontSize: 36,
            lineHeight: 44,
            letterSpacing: 0,
            paragraphSpacing: 0
        },
        headline2: {
            fontFamilyName: "Roboto",
            fontFamilyStyle: "Regular",
            fontSize: 32,
            lineHeight: 40,
            letterSpacing: 0,
            paragraphSpacing: 0
        },
        headline3: {
            fontFamilyName: "Roboto",
            fontFamilyStyle: "Regular",
            fontSize: 28,
            lineHeight: 36,
            letterSpacing: 0,
            paragraphSpacing: 0
        },
        headline4: {
            fontFamilyName: "Roboto",
            fontFamilyStyle: "Regular",
            fontSize: 24,
            lineHeight: 32,
            letterSpacing: 0,
            paragraphSpacing: 0
        },
        headline5: {
            fontFamilyName: "Roboto",
            fontFamilyStyle: "Regular",
            fontSize: 22,
            lineHeight: 28,
            letterSpacing: 0,
            paragraphSpacing: 0
        },
        headline6: {
            fontFamilyName: "Roboto",
            fontFamilyStyle: "Regular",
            fontSize: 18,
            lineHeight: 24,
            letterSpacing: 0,
            paragraphSpacing: 0
        },
        subhead1: {
            fontFamilyName: "Roboto",
            fontFamilyStyle: "Medium",
            fontSize: 16,
            lineHeight: 24,
            letterSpacing: .1,
            paragraphSpacing: 0
        },
        subhead2: {
            fontFamilyName: "Roboto",
            fontFamilyStyle: "Medium",
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: .1,
            paragraphSpacing: 0
        },
        button: {
            fontFamilyName: "Roboto",
            fontFamilyStyle: "Medium",
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: .1,
            paragraphSpacing: 0
        },
        body1: {
            fontFamilyName: "Roboto",
            fontFamilyStyle: "Regular",
            fontSize: 16,
            lineHeight: 24,
            letterSpacing: .5,
            paragraphSpacing: 0
        },
        body2: {
            fontFamilyName: "Roboto",
            fontFamilyStyle: "Regular",
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: .25,
            paragraphSpacing: 0
        },
        caption: {
            fontFamilyName: "Roboto",
            fontFamilyStyle: "Regular",
            fontSize: 12,
            lineHeight: 16,
            letterSpacing: .4,
            paragraphSpacing: 0
        },
        overline: {
            fontFamilyName: "Roboto",
            fontFamilyStyle: "Medium",
            fontSize: 12,
            lineHeight: 16,
            letterSpacing: .5,
            paragraphSpacing: 0
        },
        labelSmall: {
            fontFamilyName: "Roboto",
            fontFamilyStyle: "Medium",
            fontSize: 11,
            lineHeight: 16,
            letterSpacing: .5,
            paragraphSpacing: 0
        }
    }
  };

  const getPrimaryTonal = function(self, prefix, palettes) {
    return (null !== palettes && void 0 !== palettes ? palettes : self.palettes).get(`${prefix}-40`)
  };

  const checks_isSameColor = function (target, expected) {
    return (null === target || void 0 === target ? void 0 : target.toUpperCase()) === (null === expected || void 0 === expected ? void 0 : expected.toUpperCase())
  };

  const checks_isTheme3p = function (theme) {
    var _a, _b;
    return "Roboto" === (null === (_b = null === (_a = null === theme || void 0 === theme ? void 0 : theme.styles) || void 0 === _a ? void 0 : _a.headline1) || void 0 === _b ? void 0 : _b.fontFamilyName)
  };

  const checks_isThemeBaseline = function (theme) {
    let match_ = !0;
    const target = checks_isTheme3p(theme) ? BASELINE_3P : BASELINE_1P
      , checkGroup = (name,group,targetGroup)=>{
        if (match_) {
            let match;
            (match = checks_isSameColor(group.luminance0, targetGroup.luminance0)) && (match = checks_isSameColor(group.luminance10, targetGroup.luminance10));
            match && (match = checks_isSameColor(group.luminance20, targetGroup.luminance20));
            match && (match = checks_isSameColor(group.luminance30, targetGroup.luminance30));
            match && (match = checks_isSameColor(group.luminance40, targetGroup.luminance40));
            match && (match = checks_isSameColor(group.luminance50, targetGroup.luminance50));
            match && (match = checks_isSameColor(group.luminance60, targetGroup.luminance60));
            match && (match = checks_isSameColor(group.luminance70, targetGroup.luminance70));
            match && (match = checks_isSameColor(group.luminance80, targetGroup.luminance80));
            match && (match = checks_isSameColor(group.luminance90, targetGroup.luminance90));
            match && (match = checks_isSameColor(group.luminance95, targetGroup.luminance95));
            match && (match = checks_isSameColor(group.luminance98, targetGroup.luminance98));
            match && (match = checks_isSameColor(group.luminance100, targetGroup.luminance100));
            match_ = match
        }
        match_ || console.debug(`theme adapter ${name} group mismatch`, group, targetGroup)
    };
    checkGroup("primary", theme.primary, target.primary);
    checkGroup("secondary", theme.secondary, target.secondary);
    checkGroup("tertiary", theme.tertiary, target.tertiary);
    checkGroup("neutral", theme.neutral, target.neutral);
    checkGroup("neutralVariant", theme.neutralVariant, target.neutralVariant);
    checkGroup("error", theme.error, target.error);
    console.debug(`theme adapter baseline match: ${match_}`);
    return match_
  };

  const color_utils_numberToHex = function (value) {
    try {
      return hexFromInt(value)
    } catch (error) {
      return console.debug(`error converting [${value}] to hex`, error),
        "#000000"
    }
  };

  const tonal_group_tonesToTonalGroup = function (tones) {
    return {
      luminance100: color_utils_numberToHex(tones.tone(100)),
      luminance99: color_utils_numberToHex(tones.tone(99)),
      luminance98: color_utils_numberToHex(tones.tone(98)),
      luminance95: color_utils_numberToHex(tones.tone(95)),
      luminance90: color_utils_numberToHex(tones.tone(90)),
      luminance80: color_utils_numberToHex(tones.tone(80)),
      luminance70: color_utils_numberToHex(tones.tone(70)),
      luminance60: color_utils_numberToHex(tones.tone(60)),
      luminance50: color_utils_numberToHex(tones.tone(50)),
      luminance40: color_utils_numberToHex(tones.tone(40)),
      luminance35: color_utils_numberToHex(tones.tone(35)),
      luminance30: color_utils_numberToHex(tones.tone(30)),
      luminance25: color_utils_numberToHex(tones.tone(25)),
      luminance20: color_utils_numberToHex(tones.tone(20)),
      luminance10: color_utils_numberToHex(tones.tone(10)),
      luminance0: color_utils_numberToHex(tones.tone(0))
    }
  };

  const getColorGroup = function (self, key, tones) {
    var _a;
    const groups = null !== (_a = self.props.overrides.tonalGroups) && void 0 !== _a ? _a : {}
      , overrideGroup = Object(groups)[key];
    return flags.is1p && !self.props.isBaseline || !overrideGroup ? tonal_group_tonesToTonalGroup(tones) : overrideGroup
  }

  const tonal_group_convertTonalGroupToMap = function (prefix, group) {
    const map = new Map;
    map.set(`${prefix}-100`, group.luminance100);
    map.set(`${prefix}-99`, group.luminance99);
    map.set(`${prefix}-98`, group.luminance98);
    map.set(`${prefix}-95`, group.luminance95);
    map.set(`${prefix}-90`, group.luminance90);
    map.set(`${prefix}-80`, group.luminance80);
    map.set(`${prefix}-70`, group.luminance70);
    map.set(`${prefix}-60`, group.luminance60);
    map.set(`${prefix}-50`, group.luminance50);
    map.set(`${prefix}-40`, group.luminance40);
    map.set(`${prefix}-35`, group.luminance35);
    map.set(`${prefix}-30`, group.luminance30);
    map.set(`${prefix}-25`, group.luminance25);
    map.set(`${prefix}-20`, group.luminance20);
    map.set(`${prefix}-10`, group.luminance10);
    map.set(`${prefix}-0`, group.luminance0);
    return map
  };

  const intFromLstar = lstar => {
    const fy = (lstar + 16) / 116
      , kappa = 24389 / 27
      , cubeExceedEpsilon = fy * fy * fy > 216 / 24389;
    var xyz = [(cubeExceedEpsilon ? fy * fy * fy : (116 * fy - 16) / kappa) * WHITE_POINT_D65[0], (8 < lstar ? fy * fy * fy : lstar / kappa) * WHITE_POINT_D65[1], (cubeExceedEpsilon ? fy * fy * fy : (116 * fy - 16) / kappa) * WHITE_POINT_D65[2]];
    return intFromXyzComponents(xyz[0], xyz[1], xyz[2])
  };

  const ThemeAdapterBase = class {
    constructor(props) {
      this.props = props
    }
    get isBaseline() {
      return checks_isThemeBaseline(this.save())
    }
    get is3p() {
      return this.props.is3p
    }
    get styles() {
      return this.props.is3p ? BASELINE_3P.styles : BASELINE_1P.styles
    }
    get imageUrl() {
      return this.props.imageUrl
    }
    get light() {
      var _a, _b, _c;
      const overrides = this.props.isBaseline ? null === (_a = flags.is1p ? BASELINE_1P : BASELINE_3P) || void 0 === _a ? void 0 : _a.light : null !== (_c = null === (_b = this.props.overrides) || void 0 === _b ? void 0 : _b.light) && void 0 !== _c ? _c : {};
      var _p = this.palettes, a, b, c, d, e, f, g, h, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z, _0, _1, _2;
      return {
        primary: null !== (a = null === overrides || void 0 === overrides ? void 0 : overrides.primary) && void 0 !== a ? a : _p.get("P-40"),
        onPrimary: null !== (b = null === overrides || void 0 === overrides ? void 0 : overrides.onPrimary) && void 0 !== b ? b : _p.get("P-100"),
        primaryContainer: null !== (c = null === overrides || void 0 === overrides ? void 0 : overrides.primaryContainer) && void 0 !== c ? c : _p.get("P-90"),
        onPrimaryContainer: null !== (d = null === overrides || void 0 === overrides ? void 0 : overrides.onPrimaryContainer) && void 0 !== d ? d : _p.get("P-10"),
        secondary: null !== (e = null === overrides || void 0 === overrides ? void 0 : overrides.secondary) && void 0 !== e ? e : _p.get("S-40"),
        onSecondary: null !== (f = null === overrides || void 0 === overrides ? void 0 : overrides.onSecondary) && void 0 !== f ? f : _p.get("S-100"),
        secondaryContainer: null !== (g = null === overrides || void 0 === overrides ? void 0 : overrides.secondaryContainer) && void 0 !== g ? g : _p.get("S-90"),
        onSecondaryContainer: null !== (h = null === overrides || void 0 === overrides ? void 0 : overrides.onSecondaryContainer) && void 0 !== h ? h : _p.get("S-10"),
        tertiary: null !== (j = null === overrides || void 0 === overrides ? void 0 : overrides.tertiary) && void 0 !== j ? j : _p.get("T-40"),
        onTertiary: null !== (k = null === overrides || void 0 === overrides ? void 0 : overrides.onTertiary) && void 0 !== k ? k : _p.get("T-100"),
        tertiaryContainer: null !== (l = null === overrides || void 0 === overrides ? void 0 : overrides.tertiaryContainer) && void 0 !== l ? l : _p.get("T-90"),
        onTertiaryContainer: null !== (m = null === overrides || void 0 === overrides ? void 0 : overrides.onTertiaryContainer) && void 0 !== m ? m : _p.get("T-10"),
        error: null !== (o = null === overrides || void 0 === overrides ? void 0 : overrides.error) && void 0 !== o ? o : _p.get("E-40"),
        errorContainer: null !== (p = null === overrides || void 0 === overrides ? void 0 : overrides.errorContainer) && void 0 !== p ? p : _p.get("E-90"),
        onError: null !== (q = null === overrides || void 0 === overrides ? void 0 : overrides.onError) && void 0 !== q ? q : _p.get("E-100"),
        onErrorContainer: null !== (r = null === overrides || void 0 === overrides ? void 0 : overrides.onErrorContainer) && void 0 !== r ? r : _p.get("E-10"),
        background: null !== (s = null === overrides || void 0 === overrides ? void 0 : overrides.background) && void 0 !== s ? s : _p.get("N-99"),
        onBackground: null !== (t = null === overrides || void 0 === overrides ? void 0 : overrides.onBackground) && void 0 !== t ? t : _p.get("N-10"),
        surface: null !== (u = null === overrides || void 0 === overrides ? void 0 : overrides.surface) && void 0 !== u ? u : _p.get("N-99"),
        onSurface: null !== (v = null === overrides || void 0 === overrides ? void 0 : overrides.onSurface) && void 0 !== v ? v : _p.get("N-10"),
        surfaceVariant: null !== (w = null === overrides || void 0 === overrides ? void 0 : overrides.surfaceVariant) && void 0 !== w ? w : _p.get("NV-90"),
        onSurfaceVariant: null !== (x = null === overrides || void 0 === overrides ? void 0 : overrides.onSurfaceVariant) && void 0 !== x ? x : _p.get("NV-30"),
        outline: null !== (y = null === overrides || void 0 === overrides ? void 0 : overrides.outline) && void 0 !== y ? y : _p.get("NV-50"),
        inverseOnSurface: null !== (z = null === overrides || void 0 === overrides ? void 0 : overrides.inverseOnSurface) && void 0 !== z ? z : _p.get("N-95"),
        inverseSurface: null !== (_0 = null === overrides || void 0 === overrides ? void 0 : overrides.inverseSurface) && void 0 !== _0 ? _0 : _p.get("N-20"),
        inversePrimary: null !== (_1 = null === overrides || void 0 === overrides ? void 0 : overrides.inversePrimary) && void 0 !== _1 ? _1 : _p.get("P-80"),
        shadow: null !== (_2 = null === overrides || void 0 === overrides ? void 0 : overrides.shadow) && void 0 !== _2 ? _2 : _p.get("N-0")
      }
    }
    get dark() {
      var _a, _b, _c;
      const overrides = this.props.isBaseline ? null === (_a = flags.is1p ? BASELINE_1P : BASELINE_3P) || void 0 === _a ? void 0 : _a.dark : null !== (_c = null === (_b = this.props.overrides) || void 0 === _b ? void 0 : _b.dark) && void 0 !== _c ? _c : {};
      var _p = this.palettes, a, b, c, d, e, f, g, h, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z, _0, _1, _2;
      return {
        primary: null !== (a = null === overrides || void 0 === overrides ? void 0 : overrides.primary) && void 0 !== a ? a : _p.get("P-80"),
        onPrimary: null !== (b = null === overrides || void 0 === overrides ? void 0 : overrides.onPrimary) && void 0 !== b ? b : _p.get("P-20"),
        primaryContainer: null !== (c = null === overrides || void 0 === overrides ? void 0 : overrides.primaryContainer) && void 0 !== c ? c : _p.get("P-30"),
        onPrimaryContainer: null !== (d = null === overrides || void 0 === overrides ? void 0 : overrides.onPrimaryContainer) && void 0 !== d ? d : _p.get("P-90"),
        secondary: null !== (e = null === overrides || void 0 === overrides ? void 0 : overrides.secondary) && void 0 !== e ? e : _p.get("S-80"),
        onSecondary: null !== (f = null === overrides || void 0 === overrides ? void 0 : overrides.onSecondary) && void 0 !== f ? f : _p.get("S-20"),
        secondaryContainer: null !== (g = null === overrides || void 0 === overrides ? void 0 : overrides.secondaryContainer) && void 0 !== g ? g : _p.get("S-30"),
        onSecondaryContainer: null !== (h = null === overrides || void 0 === overrides ? void 0 : overrides.onSecondaryContainer) && void 0 !== h ? h : _p.get("S-90"),
        tertiary: null !== (j = null === overrides || void 0 === overrides ? void 0 : overrides.tertiary) && void 0 !== j ? j : _p.get("T-80"),
        onTertiary: null !== (k = null === overrides || void 0 === overrides ? void 0 : overrides.onTertiary) && void 0 !== k ? k : _p.get("T-20"),
        tertiaryContainer: null !== (l = null === overrides || void 0 === overrides ? void 0 : overrides.tertiaryContainer) && void 0 !== l ? l : _p.get("T-30"),
        onTertiaryContainer: null !== (m = null === overrides || void 0 === overrides ? void 0 : overrides.onTertiaryContainer) && void 0 !== m ? m : _p.get("T-90"),
        error: null !== (o = null === overrides || void 0 === overrides ? void 0 : overrides.error) && void 0 !== o ? o : _p.get("E-80"),
        errorContainer: null !== (p = null === overrides || void 0 === overrides ? void 0 : overrides.errorContainer) && void 0 !== p ? p : _p.get("E-30"),
        onError: null !== (q = null === overrides || void 0 === overrides ? void 0 : overrides.onError) && void 0 !== q ? q : _p.get("E-20"),
        onErrorContainer: null !== (r = null === overrides || void 0 === overrides ? void 0 : overrides.onErrorContainer) && void 0 !== r ? r : _p.get("E-90"),
        background: null !== (s = null === overrides || void 0 === overrides ? void 0 : overrides.background) && void 0 !== s ? s : _p.get("N-10"),
        onBackground: null !== (t = null === overrides || void 0 === overrides ? void 0 : overrides.onBackground) && void 0 !== t ? t : _p.get("N-90"),
        surface: null !== (u = null === overrides || void 0 === overrides ? void 0 : overrides.surface) && void 0 !== u ? u : _p.get("N-10"),
        onSurface: null !== (v = null === overrides || void 0 === overrides ? void 0 : overrides.onSurface) && void 0 !== v ? v : _p.get("N-90"),
        surfaceVariant: null !== (w = null === overrides || void 0 === overrides ? void 0 : overrides.surfaceVariant) && void 0 !== w ? w : _p.get("NV-30"),
        onSurfaceVariant: null !== (x = null === overrides || void 0 === overrides ? void 0 : overrides.onSurfaceVariant) && void 0 !== x ? x : _p.get("NV-80"),
        outline: null !== (y = null === overrides || void 0 === overrides ? void 0 : overrides.outline) && void 0 !== y ? y : _p.get("NV-60"),
        inverseOnSurface: null !== (z = null === overrides || void 0 === overrides ? void 0 : overrides.inverseOnSurface) && void 0 !== z ? z : _p.get("N-10"),
        inverseSurface: null !== (_0 = null === overrides || void 0 === overrides ? void 0 : overrides.inverseSurface) && void 0 !== _0 ? _0 : _p.get("N-90"),
        inversePrimary: null !== (_1 = null === overrides || void 0 === overrides ? void 0 : overrides.inversePrimary) && void 0 !== _1 ? _1 : _p.get("P-40"),
        shadow: null !== (_2 = null === overrides || void 0 === overrides ? void 0 : overrides.shadow) && void 0 !== _2 ? _2 : _p.get("N-0")
      }
    }
    get androidLight() {
      var _a, _p = this.palettes, key = this.props.tones, colors = null === (_a = this.props.overrides) || void 0 === _a ? void 0 : _a.androidLight, a, b, c, d, e, f, g, h, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25;
      return {
        colorAccentPrimary: null !== (b = null !== (a = null === colors || void 0 === colors ? void 0 : colors.colorAccentPrimary) && void 0 !== a ? a : _p.get("P-90")) && void 0 !== b ? b : color_utils_numberToHex(key.a1.tone(90)),
        colorAccentPrimaryVariant: null !== (d = null !== (c = null === colors || void 0 === colors ? void 0 : colors.colorAccentPrimaryVariant) && void 0 !== c ? c : _p.get("P-40")) && void 0 !== d ? d : color_utils_numberToHex(key.a1.tone(40)),
        colorAccentSecondary: null !== (f = null !== (e = null === colors || void 0 === colors ? void 0 : colors.colorAccentSecondary) && void 0 !== e ? e : _p.get("S-90")) && void 0 !== f ? f : color_utils_numberToHex(key.a2.tone(90)),
        colorAccentSecondaryVariant: null !== (h = null !== (g = null === colors || void 0 === colors ? void 0 : colors.colorAccentSecondaryVariant) && void 0 !== g ? g : _p.get("S-40")) && void 0 !== h ? h : color_utils_numberToHex(key.a2.tone(40)),
        colorAccentTertiary: null !== (k = null !== (j = null === colors || void 0 === colors ? void 0 : colors.colorAccentTertiary) && void 0 !== j ? j : _p.get("T-90")) && void 0 !== k ? k : color_utils_numberToHex(key.a3.tone(90)),
        colorAccentTertiaryVariant: null !== (m = null !== (l = null === colors || void 0 === colors ? void 0 : colors.colorAccentTertiaryVariant) && void 0 !== l ? l : _p.get("T-40")) && void 0 !== m ? m : color_utils_numberToHex(key.a3.tone(40)),
        textColorPrimary: null !== (p = null !== (o = null === colors || void 0 === colors ? void 0 : colors.textColorPrimary) && void 0 !== o ? o : _p.get("N-10")) && void 0 !== p ? p : color_utils_numberToHex(key.n1.tone(10)),
        textColorSecondary: null !== (r = null !== (q = null === colors || void 0 === colors ? void 0 : colors.textColorSecondary) && void 0 !== q ? q : _p.get("NV-30")) && void 0 !== r ? r : color_utils_numberToHex(key.n2.tone(30)),
        textColorTertiary: null !== (t = null !== (s = null === colors || void 0 === colors ? void 0 : colors.textColorTertiary) && void 0 !== s ? s : _p.get("NV-50")) && void 0 !== t ? t : color_utils_numberToHex(key.n2.tone(50)),
        textColorPrimaryInverse: null !== (v = null !== (u = null === colors || void 0 === colors ? void 0 : colors.textColorPrimaryInverse) && void 0 !== u ? u : _p.get("N-95")) && void 0 !== v ? v : color_utils_numberToHex(key.n1.tone(95)),
        textColorSecondaryInverse: null !== (x = null !== (w = null === colors || void 0 === colors ? void 0 : colors.textColorSecondaryInverse) && void 0 !== w ? w : _p.get("N-80")) && void 0 !== x ? x : color_utils_numberToHex(key.n1.tone(80)),
        textColorTertiaryInverse: null !== (z = null !== (y = null === colors || void 0 === colors ? void 0 : colors.textColorTertiaryInverse) && void 0 !== y ? y : _p.get("N-60")) && void 0 !== z ? z : color_utils_numberToHex(key.n1.tone(60)),
        colorBackground: null !== (_1 = null !== (_0 = null === colors || void 0 === colors ? void 0 : colors.colorBackground) && void 0 !== _0 ? _0 : _p.get("N-95")) && void 0 !== _1 ? _1 : color_utils_numberToHex(key.n1.tone(95)),
        colorBackgroundFloating: null !== (_3 = null !== (_2 = null === colors || void 0 === colors ? void 0 : colors.colorBackgroundFloating) && void 0 !== _2 ? _2 : _p.get("N-98")) && void 0 !== _3 ? _3 : color_utils_numberToHex(key.n1.tone(98)),
        colorSurface: null !== (_5 = null !== (_4 = null === colors || void 0 === colors ? void 0 : colors.colorSurface) && void 0 !== _4 ? _4 : _p.get("N-98")) && void 0 !== _5 ? _5 : color_utils_numberToHex(key.n1.tone(98)),
        colorSurfaceVariant: null !== (_7 = null !== (_6 = null === colors || void 0 === colors ? void 0 : colors.colorSurfaceVariant) && void 0 !== _6 ? _6 : _p.get("N-90")) && void 0 !== _7 ? _7 : color_utils_numberToHex(key.n1.tone(90)),
        colorSurfaceHighlight: null !== (_9 = null !== (_8 = null === colors || void 0 === colors ? void 0 : colors.colorSurfaceHighlight) && void 0 !== _8 ? _8 : _p.get("N-100")) && void 0 !== _9 ? _9 : color_utils_numberToHex(key.n1.tone(100)),
        surfaceHeader: null !== (_11 = null !== (_10 = null === colors || void 0 === colors ? void 0 : colors.surfaceHeader) && void 0 !== _10 ? _10 : _p.get("N-90")) && void 0 !== _11 ? _11 : color_utils_numberToHex(key.n1.tone(90)),
        underSurface: null !== (_13 = null !== (_12 = null === colors || void 0 === colors ? void 0 : colors.underSurface) && void 0 !== _12 ? _12 : _p.get("N-0")) && void 0 !== _13 ? _13 : color_utils_numberToHex(key.n1.tone(0)),
        offState: null !== (_15 = null !== (_14 = null === colors || void 0 === colors ? void 0 : colors.offState) && void 0 !== _14 ? _14 : _p.get("N-20")) && void 0 !== _15 ? _15 : color_utils_numberToHex(key.n1.tone(20)),
        accentSurface: null !== (_17 = null !== (_16 = null === colors || void 0 === colors ? void 0 : colors.accentSurface) && void 0 !== _16 ? _16 : _p.get("NV-95")) && void 0 !== _17 ? _17 : color_utils_numberToHex(key.a2.tone(95)),
        textPrimaryOnAccent: null !== (_19 = null !== (_18 = null === colors || void 0 === colors ? void 0 : colors.textPrimaryOnAccent) && void 0 !== _18 ? _18 : _p.get("N-10")) && void 0 !== _19 ? _19 : color_utils_numberToHex(key.n1.tone(10)),
        textSecondaryOnAccent: null !== (_21 = null !== (_20 = null === colors || void 0 === colors ? void 0 : colors.textSecondaryOnAccent) && void 0 !== _20 ? _20 : _p.get("NV-30")) && void 0 !== _21 ? _21 : color_utils_numberToHex(key.n2.tone(30)),
        volumeBackground: null !== (_23 = null !== (_22 = null === colors || void 0 === colors ? void 0 : colors.volumeBackground) && void 0 !== _22 ? _22 : _p.get("N-25")) && void 0 !== _23 ? _23 : color_utils_numberToHex(key.n1.tone(25)),
        scrim: null !== (_25 = null !== (_24 = null === colors || void 0 === colors ? void 0 : colors.scrim) && void 0 !== _24 ? _24 : _p.get("N-80")) && void 0 !== _25 ? _25 : color_utils_numberToHex(key.n1.tone(80))
      }
    }
    get androidDark() {
      var _a, _p = this.palettes, key = this.props.tones, colors = null === (_a = this.props.overrides) || void 0 === _a ? void 0 : _a.androidDark, a, b, c, d, e, f, g, h, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25;
      return {
        colorAccentPrimary: null !== (b = null !== (a = null === colors || void 0 === colors ? void 0 : colors.colorAccentPrimary) && void 0 !== a ? a : _p.get("P-90")) && void 0 !== b ? b : color_utils_numberToHex(key.a1.tone(90)),
        colorAccentPrimaryVariant: null !== (d = null !== (c = null === colors || void 0 === colors ? void 0 : colors.colorAccentPrimaryVariant) && void 0 !== c ? c : _p.get("P-70")) && void 0 !== d ? d : color_utils_numberToHex(key.a1.tone(70)),
        colorAccentSecondary: null !== (f = null !== (e = null === colors || void 0 === colors ? void 0 : colors.colorAccentSecondary) && void 0 !== e ? e : _p.get("S-90")) && void 0 !== f ? f : color_utils_numberToHex(key.a2.tone(90)),
        colorAccentSecondaryVariant: null !== (h = null !== (g = null === colors || void 0 === colors ? void 0 : colors.colorAccentSecondaryVariant) && void 0 !== g ? g : _p.get("S-70")) && void 0 !== h ? h : color_utils_numberToHex(key.a2.tone(70)),
        colorAccentTertiary: null !== (k = null !== (j = null === colors || void 0 === colors ? void 0 : colors.colorAccentTertiary) && void 0 !== j ? j : _p.get("T-90")) && void 0 !== k ? k : color_utils_numberToHex(key.a3.tone(90)),
        colorAccentTertiaryVariant: null !== (m = null !== (l = null === colors || void 0 === colors ? void 0 : colors.colorAccentTertiaryVariant) && void 0 !== l ? l : _p.get("T-70")) && void 0 !== m ? m : color_utils_numberToHex(key.a3.tone(70)),
        textColorPrimary: null !== (p = null !== (o = null === colors || void 0 === colors ? void 0 : colors.textColorPrimary) && void 0 !== o ? o : _p.get("N-95")) && void 0 !== p ? p : color_utils_numberToHex(key.n1.tone(95)),
        textColorSecondary: null !== (r = null !== (q = null === colors || void 0 === colors ? void 0 : colors.textColorSecondary) && void 0 !== q ? q : _p.get("NV-80")) && void 0 !== r ? r : color_utils_numberToHex(key.n2.tone(80)),
        textColorTertiary: null !== (t = null !== (s = null === colors || void 0 === colors ? void 0 : colors.textColorTertiary) && void 0 !== s ? s : _p.get("NV-60")) && void 0 !== t ? t : color_utils_numberToHex(key.n2.tone(60)),
        textColorPrimaryInverse: null !== (v = null !== (u = null === colors || void 0 === colors ? void 0 : colors.textColorPrimaryInverse) && void 0 !== u ? u : _p.get("N-10")) && void 0 !== v ? v : color_utils_numberToHex(key.n1.tone(10)),
        textColorSecondaryInverse: null !== (x = null !== (w = null === colors || void 0 === colors ? void 0 : colors.textColorSecondaryInverse) && void 0 !== w ? w : _p.get("N-30")) && void 0 !== x ? x : color_utils_numberToHex(key.n1.tone(30)),
        textColorTertiaryInverse: null !== (z = null !== (y = null === colors || void 0 === colors ? void 0 : colors.textColorTertiaryInverse) && void 0 !== y ? y : _p.get("N-50")) && void 0 !== z ? z : color_utils_numberToHex(key.n1.tone(50)),
        colorBackground: null !== (_1 = null !== (_0 = null === colors || void 0 === colors ? void 0 : colors.colorBackground) && void 0 !== _0 ? _0 : _p.get("N-10")) && void 0 !== _1 ? _1 : color_utils_numberToHex(key.n1.tone(10)),
        colorBackgroundFloating: null !== (_3 = null !== (_2 = null === colors || void 0 === colors ? void 0 : colors.colorBackgroundFloating) && void 0 !== _2 ? _2 : _p.get("N-10")) && void 0 !== _3 ? _3 : color_utils_numberToHex(key.n1.tone(10)),
        colorSurface: null !== (_5 = null !== (_4 = null === colors || void 0 === colors ? void 0 : colors.colorSurface) && void 0 !== _4 ? _4 : _p.get("N-20")) && void 0 !== _5 ? _5 : color_utils_numberToHex(key.n1.tone(20)),
        colorSurfaceVariant: null !== (_7 = null !== (_6 = null === colors || void 0 === colors ? void 0 : colors.colorSurfaceVariant) && void 0 !== _6 ? _6 : _p.get("N-30")) && void 0 !== _7 ? _7 : color_utils_numberToHex(key.n1.tone(30)),
        colorSurfaceHighlight: null !== (_9 = null !== (_8 = null === colors || void 0 === colors ? void 0 : colors.colorSurfaceHighlight) && void 0 !== _8 ? _8 : _p.get("N-35")) && void 0 !== _9 ? _9 : color_utils_numberToHex(key.n1.tone(35)),
        surfaceHeader: null !== (_11 = null !== (_10 = null === colors || void 0 === colors ? void 0 : colors.surfaceHeader) && void 0 !== _10 ? _10 : _p.get("N-30")) && void 0 !== _11 ? _11 : color_utils_numberToHex(key.n1.tone(30)),
        underSurface: null !== (_13 = null !== (_12 = null === colors || void 0 === colors ? void 0 : colors.underSurface) && void 0 !== _12 ? _12 : _p.get("N-0")) && void 0 !== _13 ? _13 : color_utils_numberToHex(key.n1.tone(0)),
        offState: null !== (_15 = null !== (_14 = null === colors || void 0 === colors ? void 0 : colors.offState) && void 0 !== _14 ? _14 : _p.get("N-20")) && void 0 !== _15 ? _15 : color_utils_numberToHex(key.n1.tone(20)),
        accentSurface: null !== (_17 = null !== (_16 = null === colors || void 0 === colors ? void 0 : colors.accentSurface) && void 0 !== _16 ? _16 : _p.get("NV-95")) && void 0 !== _17 ? _17 : color_utils_numberToHex(key.a2.tone(95)),
        textPrimaryOnAccent: null !== (_19 = null !== (_18 = null === colors || void 0 === colors ? void 0 : colors.textPrimaryOnAccent) && void 0 !== _18 ? _18 : _p.get("N-10")) && void 0 !== _19 ? _19 : color_utils_numberToHex(key.n1.tone(10)),
        textSecondaryOnAccent: null !== (_21 = null !== (_20 = null === colors || void 0 === colors ? void 0 : colors.textSecondaryOnAccent) && void 0 !== _20 ? _20 : _p.get("NV-30")) && void 0 !== _21 ? _21 : color_utils_numberToHex(key.n2.tone(30)),
        volumeBackground: null !== (_23 = null !== (_22 = null === colors || void 0 === colors ? void 0 : colors.volumeBackground) && void 0 !== _22 ? _22 : _p.get("N-25")) && void 0 !== _23 ? _23 : color_utils_numberToHex(key.n1.tone(25)),
        scrim: null !== (_25 = null !== (_24 = null === colors || void 0 === colors ? void 0 : colors.scrim) && void 0 !== _24 ? _24 : _p.get("N-80")) && void 0 !== _25 ? _25 : color_utils_numberToHex(key.n1.tone(80))
      }
    }
    get tonalGroups() {
      return Object.assign({
        primary: this.primaryGroup,
        secondary: this.secondaryGroup,
        tertiary: this.tertiaryGroup,
        neutral: this.neutralGroup,
        neutralVariant: this.neutralVariantGroup,
        error: this.errorGroup
      }, this.props.overrides.tonalGroups)
    }
    get primaryGroup() {
      return getColorGroup(this, "primary", this.props.tones.a1)
    }
    get secondaryGroup() {
      return getColorGroup(this, "secondary", this.props.tones.a2)
    }
    get tertiaryGroup() {
      return getColorGroup(this, "tertiary", this.props.tones.a3)
    }
    get neutralGroup() {
      return getColorGroup(this, "neutral", this.props.tones.n1)
    }
    get neutralVariantGroup() {
      return getColorGroup(this, "neutralVariant", this.props.tones.n2)
    }
    get errorGroup() {
      return getColorGroup(this, "error", this.props.tones.error)
    }
    get primary() {
      return tonal_group_convertTonalGroupToMap("P", this.primaryGroup)
    }
    get secondary() {
      return tonal_group_convertTonalGroupToMap("S", this.secondaryGroup)
    }
    get tertiary() {
      return tonal_group_convertTonalGroupToMap("T", this.tertiaryGroup)
    }
    get neutral() {
      return tonal_group_convertTonalGroupToMap("N", this.neutralGroup)
    }
    get neutralVariant() {
      return tonal_group_convertTonalGroupToMap("NV", this.neutralVariantGroup)
    }
    get error() {
      return tonal_group_convertTonalGroupToMap("E", this.errorGroup)
    }
    get palettes() {
      let entries = [];
      entries = entries.concat(Array.from(this.primary.entries()));
      entries = entries.concat(Array.from(this.secondary.entries()));
      entries = entries.concat(Array.from(this.tertiary.entries()));
      entries = entries.concat(Array.from(this.neutral.entries()));
      entries = entries.concat(Array.from(this.neutralVariant.entries()));
      entries = entries.concat(Array.from(this.error.entries()));
      return new Map(entries)
    }
    get seedValue() {
      return this.props.seed
    }
    get source() {
      var _a, _b, _c, _d, _e, _f;
      const p = this.palettes
        , source = this.props.overrides.source;
      return Object.assign(Object.assign({}, source), {
        seed: this.seedValue,
        imageUrl: this.imageUrl,
        primary: null !== (_a = null === source || void 0 === source ? void 0 : source.primary) && void 0 !== _a ? _a : getPrimaryTonal(this, "P", p),
        secondary: null !== (_b = null === source || void 0 === source ? void 0 : source.secondary) && void 0 !== _b ? _b : getPrimaryTonal(this, "S", p),
        tertiary: null !== (_c = null === source || void 0 === source ? void 0 : source.tertiary) && void 0 !== _c ? _c : getPrimaryTonal(this, "T", p),
        neutral: null !== (_d = null === source || void 0 === source ? void 0 : source.neutral) && void 0 !== _d ? _d : getPrimaryTonal(this, "N", p),
        neutralVariant: null !== (_e = null === source || void 0 === source ? void 0 : source.neutralVariant) && void 0 !== _e ? _e : getPrimaryTonal(this, "NV", p),
        error: null !== (_f = null === source || void 0 === source ? void 0 : source.error) && void 0 !== _f ? _f : getPrimaryTonal(this, "E", p)
      })
    }
    get customColors() {
      var _a, _b;
      return [...(null !== (_b = null === (_a = this.props.overrides) || void 0 === _a ? void 0 : _a.customColors) && void 0 !== _b ? _b : [])]
    }
    save() {
      const theme = {
        seed: this.seedValue,
        baseline: this.props.isBaseline,
        imageUrl: this.imageUrl,
        customColors: this.customColors,
        light: this.light,
        dark: this.dark,
        androidLight: flags.enableAndroid ? this.androidLight : void 0,
        androidDark: flags.enableAndroid ? this.androidDark : void 0,
        primary: this.primaryGroup,
        secondary: this.secondaryGroup,
        tertiary: this.tertiaryGroup,
        neutral: this.neutralGroup,
        neutralVariant: this.neutralVariantGroup,
        error: this.errorGroup,
        styles: this.styles,
        source: this.source
      };
      console.debug("saved theme", theme);
      return theme
    }
  };

  const ThemeAdapter = class extends ThemeAdapterBase { };

  const TonalPalette = class {
    constructor(hue, chroma) {
      this.hue = hue;
      this.chroma = chroma;
      this.cache = new Map
    }
    tone(tone) {
      let argb = this.cache.get(tone);
      void 0 === argb && (argb = (new HCT(this.hue, this.chroma, tone)).toInt(),
        this.cache.set(tone, argb));
      return argb
    }
  };

  const delinearized = rgb => .0031308 >= rgb ? 12.92 * rgb : 1.055 * Math.pow(rgb, 1 / 2.4) - .055;

  const intFromRgb = rgb => (-16777216 | (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255) >>> 0;

  const intFromXyzComponents = (x, y, z) => {
    x /= 100;
    y /= 100;
    z /= 100;
    return intFromRgb([Math.round(math_utils_clamp(255, 255 * delinearized(3.2406 * x + -1.5372 * y + -.4986 * z))), Math.round(math_utils_clamp(255, 255 * delinearized(-.9689 * x + 1.8758 * y + .0415 * z))), Math.round(math_utils_clamp(255, 255 * delinearized(.0557 * x + -.204 * y + 1.057 * z)))])
  };

  const fromJchInViewingConditions = function (j, c, h) {
    const hueRadians = h * Math.PI / 180
      , mstar = 1 / .0228 * Math.log(1 + .0228 * c * DEFAULT.fLRoot);
    return new CAM16(h, c, j, 4 / DEFAULT.c * Math.sqrt(j / 100) * (DEFAULT.aw + 4) * DEFAULT.fLRoot, 50 * Math.sqrt(c / Math.sqrt(j / 100) * DEFAULT.c / (DEFAULT.aw + 4)), (1 + 100 * .007) * j / (1 + .007 * j), mstar * Math.cos(hueRadians), mstar * Math.sin(hueRadians))
  };

  const viewed = function (self) {
    const t = Math.pow((0 === self.chroma || 0 === self.j ? 0 : self.chroma / Math.sqrt(self.j / 100)) / Math.pow(1.64 - Math.pow(.29, DEFAULT.n), .73), 1 / .9)
      , hRad = self.hue * Math.PI / 180
      , p2 = DEFAULT.aw * Math.pow(self.j / 100, 1 / DEFAULT.c / DEFAULT.z) / DEFAULT.nbb
      , hSin = Math.sin(hRad)
      , hCos = Math.cos(hRad)
      , gamma = 23 * (p2 + .305) * t / (5E4 / 13 * (Math.cos(hRad + 2) + 3.8) * 5.75 * DEFAULT.nc * DEFAULT.ncb + 11 * t * hCos + 108 * t * hSin)
      , a = gamma * hCos
      , b = gamma * hSin
      , rA = (460 * p2 + 451 * a + 288 * b) / 1403
      , gA = (460 * p2 - 891 * a - 261 * b) / 1403
      , bA = (460 * p2 - 220 * a - 6300 * b) / 1403
      , rF = 100 / DEFAULT.fl * math_utils_signum(rA) * Math.pow(Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA))), 1 / .42) / DEFAULT.rgbD[0]
      , gF = 100 / DEFAULT.fl * math_utils_signum(gA) * Math.pow(Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA))), 1 / .42) / DEFAULT.rgbD[1]
      , bF = 100 / DEFAULT.fl * math_utils_signum(bA) * Math.pow(Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA))), 1 / .42) / DEFAULT.rgbD[2];
    return intFromXyzComponents(1.86206786 * rF - 1.01125463 * gF + .14918677 * bF, .38752654 * rF + .62144744 * gF - .00897398 * bF, -.0158415 * rF - .03412294 * gF + 1.04996444 * bF)
  };

  const math_utils_clamp = function (max, input) {
    return Math.min(Math.max(input, 0), max)
  };

  const math_utils_sanitizeDegrees = function (degrees) {
    return 0 > degrees ? degrees % 360 + 360 : 360 <= degrees ? degrees % 360 : degrees
  };

  const hct_getIntInViewingConditions = function (hue_, chroma_, tone_) {
    if (1 > chroma_ || 0 >= Math.round(tone_) || 100 <= Math.round(tone_))
      return intFromLstar(tone_);
    hue_ = math_utils_sanitizeDegrees(hue_);
    let high = chroma_
      , mid = chroma_
      , low = 0
      , isFirstLoop = !0
      , answer = null;
    for (; .4 <= Math.abs(low - high);) {
      var hue = hue_
        , chroma = mid
        , tone = tone_;
      let low_ = 0, high_ = 100, mid_, bestdL = 1E3, bestdE = 1E3, bestCam = null;
      for (; .01 < Math.abs(low_ - high_);) {
        mid_ = low_ + (high_ - low_) / 2;
        const clipped = viewed(fromJchInViewingConditions(mid_, chroma, hue))
          , clippedLstar = lstarFromInt(clipped)
          , dL = Math.abs(tone - clippedLstar);
        if (.2 > dL) {
          const camClipped = fromIntInViewingConditions(clipped)
            , dE = camClipped.distance(fromJchInViewingConditions(camClipped.j, camClipped.chroma, hue));
          1 >= dE && dE <= bestdE && (bestdL = dL,
            bestdE = dE,
            bestCam = camClipped)
        }
        if (0 === bestdL && 0 === bestdE)
          break;
        clippedLstar < tone ? low_ = mid_ : high_ = mid_
      }
      const possibleAnswer = bestCam;
      if (isFirstLoop) {
        if (null != possibleAnswer)
          return viewed(possibleAnswer);
        isFirstLoop = !1
      } else
        null === possibleAnswer ? high = mid : (answer = possibleAnswer,
          low = mid);
      mid = low + (high - low) / 2
    }
    return null === answer ? intFromLstar(tone_) : viewed(answer)
  };

  const setInternalState = function (self, argb) {
    const cam = fromIntInViewingConditions(argb)
      , tone = lstarFromInt(argb);
    self.internalHue = cam.hue;
    self.internalChroma = cam.chroma;
    self.internalTone = tone
  };

  const lstarFromInt = argb => {
    let y = 21.26 * linearized(((argb & 16711680) >> 16) / 255) + 71.52 * linearized(((argb & 65280) >> 8) / 255) + 7.22 * linearized((argb & 255) / 255);
    y /= 100;
    return y <= 216 / 24389 ? 24389 / 27 * y : 116 * Math.pow(y, 1 / 3) - 16
  };

  const HCT = class {
    constructor(internalHue, internalChroma, internalTone) {
      this.internalHue = internalHue;
      this.internalChroma = internalChroma;
      this.internalTone = internalTone;
      setInternalState(this, this.toInt())
    }
    toInt() {
      return hct_getIntInViewingConditions(math_utils_sanitizeDegrees(this.internalHue), this.internalChroma, math_utils_clamp(100, this.internalTone))
    }
    get hue() {
      return this.internalHue
    }
    set hue(newHue) {
      setInternalState(this, hct_getIntInViewingConditions(math_utils_sanitizeDegrees(math_utils_sanitizeDegrees(newHue)), this.internalChroma, math_utils_clamp(100, this.internalTone)))
    }
    get chroma() {
      return this.internalChroma
    }
    set chroma(newChroma) {
      setInternalState(this, hct_getIntInViewingConditions(math_utils_sanitizeDegrees(this.internalHue), newChroma, math_utils_clamp(100, this.internalTone)))
    }
    get tone() {
      return this.internalTone
    }
    set tone(newTone) {
      setInternalState(this, hct_getIntInViewingConditions(math_utils_sanitizeDegrees(this.internalHue), this.internalChroma, math_utils_clamp(100, newTone)))
    }
  };

  const CAM16 = class {
    constructor(hue, chroma, j, q, s, jstar, astar, bstar) {
      this.hue = hue;
      this.chroma = chroma;
      this.j = j;
      this.q = q;
      this.s = s;
      this.jstar = jstar;
      this.astar = astar;
      this.bstar = bstar
    }
    distance(other) {
      const dJ = this.jstar - other.jstar
        , dA = this.astar - other.astar
        , dB = this.bstar - other.bstar;
      return 1.41 * Math.pow(Math.sqrt(dJ * dJ + dA * dA + dB * dB), .63)
    }
  };

  const math_utils_signum = function (input) {
    return 0 > input ? -1 : 0 === input ? 0 : 1
  };

  const ViewingConditions = class {
    constructor(n, aw, nbb, ncb, c, nc, rgbD, fl, fLRoot, z) {
      this.n = n;
      this.aw = aw;
      this.nbb = nbb;
      this.ncb = ncb;
      this.c = c;
      this.nc = nc;
      this.rgbD = rgbD;
      this.fl = fl;
      this.fLRoot = fLRoot;
      this.z = z
    }
  };

  const WHITE_POINT_D65 = [95.047, 100, 108.883];

  const DEFAULT = function (whitePoint = WHITE_POINT_D65, adaptingLuminance = 200 / Math.PI * 100 * Math.pow(66 / 116, 3) / 100, backgroundLstar = 50, surround = 2, discountingIlluminant = !1) {
    const rW = .401288 * whitePoint[0] + .650173 * whitePoint[1] + -.051461 * whitePoint[2]
      , gW = -.250268 * whitePoint[0] + 1.204414 * whitePoint[1] + .045854 * whitePoint[2]
      , bW = -.002079 * whitePoint[0] + .048952 * whitePoint[1] + .953127 * whitePoint[2]
      , f = .8 + surround / 10;
    if (.9 <= f) {
      var amount = 10 * (f - .9);
      var _temp = .59 * (1 - amount) + .69 * amount
    } else {
      var amount_ = 10 * (f - .8);
      _temp = .525 * (1 - amount_) + .59 * amount_
    }
    let d = discountingIlluminant ? 1 : f * (1 - 1 / 3.6 * Math.exp((-adaptingLuminance - 42) / 92));
    d = 1 < d ? 1 : 0 > d ? 0 : d;
    const rgbD = [100 / rW * d + 1 - d, 100 / gW * d + 1 - d, 100 / bW * d + 1 - d]
      , k = 1 / (5 * adaptingLuminance + 1)
      , k4 = k * k * k * k
      , k4F = 1 - k4
      , fl = k4 * adaptingLuminance + .1 * k4F * k4F * Math.cbrt(5 * adaptingLuminance)
      , n = (8 < backgroundLstar ? 100 * Math.pow((backgroundLstar + 16) / 116, 3) : backgroundLstar / (24389 / 27) * 100) / whitePoint[1]
      , nbb = .725 / Math.pow(n, .2)
      , rgbAFactors = [Math.pow(fl * rgbD[0] * rW / 100, .42), Math.pow(fl * rgbD[1] * gW / 100, .42), Math.pow(fl * rgbD[2] * bW / 100, .42)]
      , rgbA = [400 * rgbAFactors[0] / (rgbAFactors[0] + 27.13), 400 * rgbAFactors[1] / (rgbAFactors[1] + 27.13), 400 * rgbAFactors[2] / (rgbAFactors[2] + 27.13)];
    return new ViewingConditions(n, (2 * rgbA[0] + rgbA[1] + .05 * rgbA[2]) * nbb, nbb, nbb, _temp, f, rgbD, fl, Math.pow(fl, .25), 1.48 + Math.sqrt(n))
  }();

  const linearized = rgb => .04045 >= rgb ? rgb / 12.92 : Math.pow((rgb + .055) / 1.055, 2.4);

  const fromIntInViewingConditions = function (argb) {
    const redL = 100 * linearized(((argb & 16711680) >> 16) / 255)
      , greenL = 100 * linearized(((argb & 65280) >> 8) / 255)
      , blueL = 100 * linearized((argb & 255) / 255)
      , x = .41233895 * redL + .35762064 * greenL + .18051042 * blueL
      , y = .2126 * redL + .7152 * greenL + .0722 * blueL
      , z = .01932141 * redL + .11916382 * greenL + .95034478 * blueL
      , rD = DEFAULT.rgbD[0] * (.401288 * x + .650173 * y - .051461 * z)
      , gD = DEFAULT.rgbD[1] * (-.250268 * x + 1.204414 * y + .045854 * z)
      , bD = DEFAULT.rgbD[2] * (-.002079 * x + .048952 * y + .953127 * z)
      , rAF = Math.pow(DEFAULT.fl * Math.abs(rD) / 100, .42)
      , gAF = Math.pow(DEFAULT.fl * Math.abs(gD) / 100, .42)
      , bAF = Math.pow(DEFAULT.fl * Math.abs(bD) / 100, .42)
      , rA = 400 * math_utils_signum(rD) * rAF / (rAF + 27.13)
      , gA = 400 * math_utils_signum(gD) * gAF / (gAF + 27.13)
      , bA = 400 * math_utils_signum(bD) * bAF / (bAF + 27.13)
      , a = (11 * rA + -12 * gA + bA) / 11
      , b = (rA + gA - 2 * bA) / 9
      , atanDegrees = 180 * Math.atan2(b, a) / Math.PI
      , hue = 0 > atanDegrees ? atanDegrees + 360 : 360 <= atanDegrees ? atanDegrees - 360 : atanDegrees
      , hueRadians = hue * Math.PI / 180
      , j = 100 * Math.pow((40 * rA + 20 * gA + bA) / 20 * DEFAULT.nbb / DEFAULT.aw, DEFAULT.c * DEFAULT.z)
      , alpha = Math.pow(5E4 / 13 * .25 * (Math.cos((20.14 > hue ? hue + 360 : hue) * Math.PI / 180 + 2) + 3.8) * DEFAULT.nc * DEFAULT.ncb * Math.sqrt(a * a + b * b) / ((20 * rA + 20 * gA + 21 * bA) / 20 + .305), .9) * Math.pow(1.64 - Math.pow(.29, DEFAULT.n), .73)
      , c = alpha * Math.sqrt(j / 100)
      , mstar = 1 / .0228 * Math.log(1 + .0228 * c * DEFAULT.fLRoot);
    return new CAM16(hue, c, j, 4 / DEFAULT.c * Math.sqrt(j / 100) * (DEFAULT.aw + 4) * DEFAULT.fLRoot, 50 * Math.sqrt(alpha * DEFAULT.c / (DEFAULT.aw + 4)), (1 + 100 * .007) * j / (1 + .007 * j), mstar * Math.cos(hueRadians), mstar * Math.sin(hueRadians))
  };

  const fromInt = function (argb) {
    const cam = fromIntInViewingConditions(argb);
    return new HCT(cam.hue, cam.chroma, lstarFromInt(argb))
  };

  const intFromHex = hex => {
    hex = hex.replace("#", "");
    const isThree = 3 === hex.length
      , isSix = 6 === hex.length
      , isEight = 8 === hex.length;
    if (!isThree && !isSix && !isEight)
      throw Error("unexpected hex " + hex);
    let r = 0
      , g = 0
      , b = 0;
    isThree ? (r = parseInt(hex.slice(0, 1).repeat(2), 16),
      g = parseInt(hex.slice(1, 2).repeat(2), 16),
      b = parseInt(hex.slice(2, 3).repeat(2), 16)) : isSix ? (r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16)) : isEight && (r = parseInt(hex.slice(2, 4), 16),
          g = parseInt(hex.slice(4, 6), 16),
          b = parseInt(hex.slice(6, 8), 16));
    return (-16777216 | (r & 255) << 16 | (g & 255) << 8 | b & 255) >>> 0
  };

  const CorePalette = class {
    constructor(argb) {
      const hct = fromInt(argb)
        , hue = hct.hue;
      this.a1 = new TonalPalette(hue, Math.max(48, hct.chroma));
      this.a2 = new TonalPalette(hue, 16);
      this.a3 = new TonalPalette(hue + 60, 24);
      this.n1 = new TonalPalette(hue, 4);
      this.n2 = new TonalPalette(hue, 8);
      this.error = new TonalPalette(25, 84)
    }
  };

  class Flags {
    get internal() {
      return !1
    }
    get is3p() {
      return !this.internal
    }
    get is1p() {
      return this.internal
    }
    get enableDsp() {
      return !this.is1p
    }
    get enableAndroid() {
      return this.is1p
    }
    get enableWebExport() {
      return this.is3p
    }
    get enableExtendedColors() {
      return !0
    }
    get enableColorShift() {
      return this.is1p
    }
  };

  const flags = new Flags
    , SHOW_DSP = flags.enableDsp
    , SHOW_ANDROID = flags.enableAndroid
    , SHOW_WEB_EXPORT = flags.enableWebExport
    , ENABLE_EXTENDED_COLOR_SHIFT = flags.enableColorShift;

  const fromColor = function (value) {
    var is3p = flags.is3p;
    console.debug("theme adapter from color");
    const keyTones = new CorePalette(intFromHex(value));
    return new ThemeAdapter({
      tones: keyTones,
      seed: value,
      is3p,
      overrides: {},
      blend: !1,
      isBaseline: !1
    });
  };

  const hexFromInt = argb => {
    const g = (argb & 65280) >> 8
      , b = argb & 255
      , outParts = [((argb & 16711680) >> 16).toString(16), g.toString(16), b.toString(16)];
    for (const [i_tsickle_destructured_1, part_tsickle_destructured_2] of outParts.entries()) {
      const i = i_tsickle_destructured_1
        , part = part_tsickle_destructured_2;
      1 === part.length && (outParts[i] = "0" + part)
    }
    return "#" + outParts.join("")
  };

  const filter = function (colorsToExcitedProportion, colorsToCam) {
    const filtered = [];
    for (const [color_tsickle_destructured_8, cam_tsickle_destructured_9] of colorsToCam.entries()) {
      const color = color_tsickle_destructured_8
        , cam = cam_tsickle_destructured_9
        , proportion = colorsToExcitedProportion.get(color);
      15 <= cam.chroma && 10 <= lstarFromInt(color) && .01 <= proportion && filtered.push(color)
    }
    return filtered
  };

  const score = function (colorsToPopulation) {
    let populationSum = 0;
    for (const population of colorsToPopulation.values())
      populationSum += population;
    const colorsToProportion = new Map
      , colorsToCam = new Map
      , hueProportions = Array(360).fill(0);
    for (const [color_tsickle_destructured_1, population_tsickle_destructured_2] of colorsToPopulation.entries()) {
      const color = color_tsickle_destructured_1
        , proportion = population_tsickle_destructured_2 / populationSum;
      colorsToProportion.set(color, proportion);
      const cam = fromIntInViewingConditions(color);
      colorsToCam.set(color, cam);
      hueProportions[Math.round(cam.hue)] += proportion
    }
    const colorsToExcitedProportion = new Map;
    for (const [color_tsickle_destructured_3, cam_tsickle_destructured_4] of colorsToCam.entries()) {
      const color = color_tsickle_destructured_3
        , hue = Math.round(cam_tsickle_destructured_4.hue);
      let excitedProportion = 0;
      for (let i = hue - 15; i < hue + 15; i++)
        excitedProportion += hueProportions[math_utils_sanitizeDegrees(i)];
      colorsToExcitedProportion.set(color, excitedProportion)
    }
    const colorsToScore = new Map;
    for (const [color_tsickle_destructured_5, cam_tsickle_destructured_6] of colorsToCam.entries()) {
      const color = color_tsickle_destructured_5
        , cam = cam_tsickle_destructured_6
        , proportionScore = 70 * colorsToExcitedProportion.get(color);
      colorsToScore.set(color, proportionScore + (cam.chroma - 48) * (48 > cam.chroma ? .1 : .3))
    }
    const filteredColors = filter(colorsToExcitedProportion, colorsToCam)
      , dedupedColorsToScore = new Map;
    for (const color of filteredColors) {
      let duplicateHue = !1;
      const hue = colorsToCam.get(color).hue;
      for (const [alreadyChosenColor_tsickle_destructured_7] of dedupedColorsToScore) {
        const alreadyChosenHue = colorsToCam.get(alreadyChosenColor_tsickle_destructured_7).hue;
        if (15 > 180 - Math.abs(Math.abs(hue - alreadyChosenHue) - 180)) {
          duplicateHue = !0;
          break
        }
      }
      duplicateHue || dedupedColorsToScore.set(color, colorsToScore.get(color))
    }
    const colorsByScoreDescending = Array.from(dedupedColorsToScore.entries());
    colorsByScoreDescending.sort((first, second) => second[1] - first[1]);
    const answer = colorsByScoreDescending.map(entry => entry[0]);
    0 === answer.length && answer.push(4282549748);
    return answer
  };

  class quantizer_wsmeans_DistanceAndIndex {
    constructor() {
      this.index = this.distance = -1
    }
  };

  const labFromInt = argb => {
    const e = 216 / 24389
      , kappa = 24389 / 27
      , redL = 100 * linearized(((argb & 16711680) >> 16) / 255)
      , greenL = 100 * linearized(((argb & 65280) >> 8) / 255)
      , blueL = 100 * linearized((argb & 255) / 255)
      , yNormalized = (.2126 * redL + .7152 * greenL + .0722 * blueL) / WHITE_POINT_D65[1];
    let fy;
    fy = yNormalized > e ? Math.pow(yNormalized, 1 / 3) : (kappa * yNormalized + 16) / 116;
    const xNormalized = (.41233895 * redL + .35762064 * greenL + .18051042 * blueL) / WHITE_POINT_D65[0]
      , zNormalized = (.01932141 * redL + .11916382 * greenL + .95034478 * blueL) / WHITE_POINT_D65[2];
    return [116 * fy - 16, 500 * ((xNormalized > e ? Math.pow(xNormalized, 1 / 3) : (kappa * xNormalized + 16) / 116) - fy), 200 * (fy - (zNormalized > e ? Math.pow(zNormalized, 1 / 3) : (kappa * zNormalized + 16) / 116))]
  };

  const LabPointProvider = class {
    toInt(point) {
      var l = point[0];
      const e = 216 / 24389
        , kappa = 24389 / 27
        , fy = (l + 16) / 116
        , fx = point[1] / 500 + fy
        , fz = fy - point[2] / 200
        , fx3 = fx * fx * fx
        , fz3 = fz * fz * fz;
      var xyz = [(fx3 > e ? fx3 : (116 * fx - 16) / kappa) * WHITE_POINT_D65[0], (8 < l ? fy * fy * fy : l / kappa) * WHITE_POINT_D65[1], (fz3 > e ? fz3 : (116 * fz - 16) / kappa) * WHITE_POINT_D65[2]];
      return intFromXyzComponents(xyz[0], xyz[1], xyz[2])
    }
    distance(from, to) {
      const dL = from[0] - to[0]
        , dA = from[1] - to[1]
        , dB = from[2] - to[2];
      return dL * dL + dA * dA + dB * dB
    }
  };

  class quantizer_wu_CreateBoxesResult {
    constructor(resultCount) {
      this.resultCount = resultCount
    }
  };

  const variance = function (self, cube) {
    const dr = self.volume(cube, self.momentsR)
      , dg = self.volume(cube, self.momentsG)
      , db = self.volume(cube, self.momentsB)
      , xx = self.moments[getIndex(cube.r1, cube.g1, cube.b1)] - self.moments[getIndex(cube.r1, cube.g1, cube.b0)] - self.moments[getIndex(cube.r1, cube.g0, cube.b1)] + self.moments[getIndex(cube.r1, cube.g0, cube.b0)] - self.moments[getIndex(cube.r0, cube.g1, cube.b1)] + self.moments[getIndex(cube.r0, cube.g1, cube.b0)] + self.moments[getIndex(cube.r0, cube.g0, cube.b1)] - self.moments[getIndex(cube.r0, cube.g0, cube.b0)]
      , hypotenuse = dr * dr + dg * dg + db * db
      , volume = self.volume(cube, self.weights);
    return xx - hypotenuse / volume
  };

  class quantizer_wu_MaximizeResult {
    constructor(cutLocation, maximum) {
      this.cutLocation = cutLocation;
      this.maximum = maximum
    }
  };

  const maximize = function (self, cube, direction, first, last, wholeR, wholeG, wholeB, wholeW) {
    const bottomR = self.bottom(cube, direction, self.momentsR)
      , bottomG = self.bottom(cube, direction, self.momentsG)
      , bottomB = self.bottom(cube, direction, self.momentsB)
      , bottomW = self.bottom(cube, direction, self.weights);
    let max = 0, cut = -1, halfR, halfG, halfB, halfW;
    for (let i = first; i < last; i++) {
      halfR = bottomR + self.top(cube, direction, i, self.momentsR);
      halfG = bottomG + self.top(cube, direction, i, self.momentsG);
      halfB = bottomB + self.top(cube, direction, i, self.momentsB);
      halfW = bottomW + self.top(cube, direction, i, self.weights);
      if (0 === halfW)
        continue;
      let tempNumerator = halfR * halfR + halfG * halfG + halfB * halfB
        , tempDenominator = 1 * halfW
        , temp = tempNumerator / tempDenominator;
      halfR = wholeR - halfR;
      halfG = wholeG - halfG;
      halfB = wholeB - halfB;
      halfW = wholeW - halfW;
      0 !== halfW && (tempNumerator = halfR * halfR + halfG * halfG + halfB * halfB,
        tempDenominator = 1 * halfW,
        temp += tempNumerator / tempDenominator,
        temp > max && (max = temp,
          cut = i))
    }
    return new quantizer_wu_MaximizeResult(cut, max)
  };

  const cut = function (self, one, two) {
    const wholeR = self.volume(one, self.momentsR)
      , wholeG = self.volume(one, self.momentsG)
      , wholeB = self.volume(one, self.momentsB)
      , wholeW = self.volume(one, self.weights)
      , maxRResult = maximize(self, one, "red", one.r0 + 1, one.r1, wholeR, wholeG, wholeB, wholeW)
      , maxGResult = maximize(self, one, "green", one.g0 + 1, one.g1, wholeR, wholeG, wholeB, wholeW)
      , maxBResult = maximize(self, one, "blue", one.b0 + 1, one.b1, wholeR, wholeG, wholeB, wholeW);
    let direction;
    const maxR = maxRResult.maximum
      , maxG = maxGResult.maximum
      , maxB = maxBResult.maximum;
    if (maxR >= maxG && maxR >= maxB) {
      if (0 > maxRResult.cutLocation)
        return !1;
      direction = "red"
    } else
      direction = maxG >= maxR && maxG >= maxB ? "green" : "blue";
    two.r1 = one.r1;
    two.g1 = one.g1;
    two.b1 = one.b1;
    switch (direction) {
      case "red":
        one.r1 = maxRResult.cutLocation;
        two.r0 = one.r1;
        two.g0 = one.g0;
        two.b0 = one.b0;
        break;
      case "green":
        one.g1 = maxGResult.cutLocation;
        two.r0 = one.r0;
        two.g0 = one.g1;
        two.b0 = one.b0;
        break;
      case "blue":
        one.b1 = maxBResult.cutLocation;
        two.r0 = one.r0;
        two.g0 = one.g0;
        two.b0 = one.b1;
        break;
      default:
        throw Error("unexpected direction " + direction);
    }
    one.vol = (one.r1 - one.r0) * (one.g1 - one.g0) * (one.b1 - one.b0);
    two.vol = (two.r1 - two.r0) * (two.g1 - two.g0) * (two.b1 - two.b0);
    return !0
  };

  class quantizer_wu_Box {
    constructor() {
      this.vol = this.b1 = this.b0 = this.g1 = this.g0 = this.r1 = this.r0 = 0
    }
  };

  const createBoxes = function (self) {
    self.cubes = Array.from({
      length: 256
    }).fill(0).map(() => new quantizer_wu_Box);
    const volumeVariance = Array.from({
      length: 256
    }).fill(0);
    self.cubes[0].r0 = 0;
    self.cubes[0].g0 = 0;
    self.cubes[0].b0 = 0;
    self.cubes[0].r1 = 32;
    self.cubes[0].g1 = 32;
    self.cubes[0].b1 = 32;
    let generatedColorCount = 256
      , next = 0;
    for (let i = 1; 256 > i; i++) {
      cut(self, self.cubes[next], self.cubes[i]) ? (volumeVariance[next] = 1 < self.cubes[next].vol ? variance(self, self.cubes[next]) : 0,
        volumeVariance[i] = 1 < self.cubes[i].vol ? variance(self, self.cubes[i]) : 0) : (volumeVariance[next] = 0,
          i--);
      next = 0;
      let temp = volumeVariance[0];
      for (let j = 1; j <= i; j++)
        volumeVariance[j] > temp && (temp = volumeVariance[j],
          next = j);
      if (0 >= temp) {
        generatedColorCount = i + 1;
        break
      }
    }
    return new quantizer_wu_CreateBoxesResult(generatedColorCount)
  };

  const getIndex = function (r, g, b) {
    return (r << 10) + (r << 6) + r + (g << 5) + g + b
  };

  const QuantizerWu = class {
    constructor() {
      this.weights = [];
      this.momentsR = [];
      this.momentsG = [];
      this.momentsB = [];
      this.moments = [];
      this.cubes = []
    }
    volume(cube, moment) {
      return moment[getIndex(cube.r1, cube.g1, cube.b1)] - moment[getIndex(cube.r1, cube.g1, cube.b0)] - moment[getIndex(cube.r1, cube.g0, cube.b1)] + moment[getIndex(cube.r1, cube.g0, cube.b0)] - moment[getIndex(cube.r0, cube.g1, cube.b1)] + moment[getIndex(cube.r0, cube.g1, cube.b0)] + moment[getIndex(cube.r0, cube.g0, cube.b1)] - moment[getIndex(cube.r0, cube.g0, cube.b0)]
    }
    bottom(cube, direction, moment) {
      switch (direction) {
        case "red":
          return -moment[getIndex(cube.r0, cube.g1, cube.b1)] + moment[getIndex(cube.r0, cube.g1, cube.b0)] + moment[getIndex(cube.r0, cube.g0, cube.b1)] - moment[getIndex(cube.r0, cube.g0, cube.b0)];
        case "green":
          return -moment[getIndex(cube.r1, cube.g0, cube.b1)] + moment[getIndex(cube.r1, cube.g0, cube.b0)] + moment[getIndex(cube.r0, cube.g0, cube.b1)] - moment[getIndex(cube.r0, cube.g0, cube.b0)];
        case "blue":
          return -moment[getIndex(cube.r1, cube.g1, cube.b0)] + moment[getIndex(cube.r1, cube.g0, cube.b0)] + moment[getIndex(cube.r0, cube.g1, cube.b0)] - moment[getIndex(cube.r0, cube.g0, cube.b0)];
        default:
          throw Error("unexpected direction $direction");
      }
    }
    top(cube, direction, position, moment) {
      switch (direction) {
        case "red":
          return moment[getIndex(position, cube.g1, cube.b1)] - moment[getIndex(position, cube.g1, cube.b0)] - moment[getIndex(position, cube.g0, cube.b1)] + moment[getIndex(position, cube.g0, cube.b0)];
        case "green":
          return moment[getIndex(cube.r1, position, cube.b1)] - moment[getIndex(cube.r1, position, cube.b0)] - moment[getIndex(cube.r0, position, cube.b1)] + moment[getIndex(cube.r0, position, cube.b0)];
        case "blue":
          return moment[getIndex(cube.r1, cube.g1, position)] - moment[getIndex(cube.r1, cube.g0, position)] - moment[getIndex(cube.r0, cube.g1, position)] + moment[getIndex(cube.r0, cube.g0, position)];
        default:
          throw Error("unexpected direction $direction");
      }
    }
  };

  const index_unwrapSafeUrl = function (url) {
    if (url instanceof SafeUrl)
      if (url instanceof safe_url_impl_SafeUrlImpl)
        var _temp = url.privateDoNotAccessOrElseWrappedUrl;
      else
        throw Error("Unexpected type when unwrapping SafeUrl");
    else
      _temp = unwrap(url);
    return _temp
  };

  const secretToken = {};
  const SafeUrl = class { };

  class safe_url_impl_SafeUrlImpl extends SafeUrl {
    constructor(url) {
      super();
      if (secretToken !== secretToken)
        throw Error("Bad secret");
      this.privateDoNotAccessOrElseWrappedUrl = url
    }
    toString() {
      return this.privateDoNotAccessOrElseWrappedUrl
    }
  };

  const safe_url_builders_fromBlob = function (blob) {
    const match = blob.type.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i);
    if (2 !== (null === match || void 0 === match ? void 0 : match.length) || !(/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)$/i.test(match[1]) || /^video\/(?:mpeg|mp4|ogg|webm|x-matroska|quicktime|x-ms-wmv)$/i.test(match[1]) || /^audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(match[1])))
      throw Error(`unsafe blob MIME type: ${blob.type}`);
    return new safe_url_impl_SafeUrlImpl(URL.createObjectURL(blob))
  };

  const image_utils_decodeToImageData = async function (bytes) {
    const url = safe_url_builders_fromBlob(new Blob([bytes], {
      type: "image/png"
    }))
      , image = await new Promise((resolve, reject) => {
        const img = new Image;
        img.onload = () => {
          resolve(img)
        }
          ;
        img.onerror = () => {
          reject()
        }
          ;
        img.src = index_unwrapSafeUrl(url)
      }
      )
      , ctx = document.createElement("canvas").getContext("2d");
    ctx.canvas.width = 112;
    ctx.canvas.height = 112;
    ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, ctx.canvas.width, ctx.canvas.height);
    return ctx.getImageData(0, 0, image.width, image.height)
  };

  const image_utils_bufferToPixels = async function (buffer) {
    const imageBytes = new Uint8Array(buffer)
      , imageData = await image_utils_decodeToImageData(imageBytes)
      , pixels = [];
    for (let i = 0; i < imageData.data.length; i += 4)
      255 > imageData.data[i + 3] || pixels.push(intFromRgb([imageData.data[i], imageData.data[i + 1], imageData.data[i + 2]]));
    return pixels
  };

  const index_seedFromImage = async function (image) {
    const imageBuffer = "string" === typeof image ? await (await fetch(image)).arrayBuffer() : image;
    var pixels = await image_utils_bufferToPixels(imageBuffer), self = new QuantizerWu, a;
    self.weights = Array.from({
      length: 35937
    }).fill(0);
    self.momentsR = Array.from({
      length: 35937
    }).fill(0);
    self.momentsG = Array.from({
      length: 35937
    }).fill(0);
    self.momentsB = Array.from({
      length: 35937
    }).fill(0);
    self.moments = Array.from({
      length: 35937
    }).fill(0);
    var a_;
    const countByColor = new Map;
    for (let i = 0; i < pixels.length; i++) {
      const pixel = pixels[i];
      255 > (pixel & 4278190080) >> 24 >>> 0 || countByColor.set(pixel, (null !== (a_ = countByColor.get(pixel)) && void 0 !== a_ ? a_ : 0) + 1)
    }
    for (const [pixel_tsickle_destructured_1, count_tsickle_destructured_2] of countByColor.entries()) {
      const pixel = pixel_tsickle_destructured_1
        , count = count_tsickle_destructured_2
        , red = (pixel & 16711680) >> 16
        , green = (pixel & 65280) >> 8
        , blue = pixel & 255
        , index = getIndex((red >> 3) + 1, (green >> 3) + 1, (blue >> 3) + 1);
      self.weights[index] = (null !== (a = self.weights[index]) && void 0 !== a ? a : 0) + count;
      self.momentsR[index] += count * red;
      self.momentsG[index] += count * green;
      self.momentsB[index] += count * blue;
      self.moments[index] += count * (red * red + green * green + blue * blue)
    }
    for (let r = 1; 33 > r; r++) {
      const area = Array.from({
        length: 33
      }).fill(0)
        , areaR = Array.from({
          length: 33
        }).fill(0)
        , areaG = Array.from({
          length: 33
        }).fill(0)
        , areaB = Array.from({
          length: 33
        }).fill(0)
        , area2 = Array.from({
          length: 33
        }).fill(0);
      for (let g = 1; 33 > g; g++) {
        let line = 0
          , lineR = 0
          , lineG = 0
          , lineB = 0
          , line2 = 0;
        for (let b = 1; 33 > b; b++) {
          const index = getIndex(r, g, b);
          line += self.weights[index];
          lineR += self.momentsR[index];
          lineG += self.momentsG[index];
          lineB += self.momentsB[index];
          line2 += self.moments[index];
          area[b] += line;
          areaR[b] += lineR;
          areaG[b] += lineG;
          areaB[b] += lineB;
          area2[b] += line2;
          const previousIndex = getIndex(r - 1, g, b);
          self.weights[index] = self.weights[previousIndex] + area[b];
          self.momentsR[index] = self.momentsR[previousIndex] + areaR[b];
          self.momentsG[index] = self.momentsG[previousIndex] + areaG[b];
          self.momentsB[index] = self.momentsB[previousIndex] + areaB[b];
          self.moments[index] = self.moments[previousIndex] + area2[b]
        }
      }
    }
    var colorCount = createBoxes(self).resultCount;
    const colors = [];
    for (let i = 0; i < colorCount; ++i) {
      const cube = self.cubes[i]
        , weight = self.volume(cube, self.weights);
      if (0 < weight) {
        const r = Math.round(self.volume(cube, self.momentsR) / weight)
          , g = Math.round(self.volume(cube, self.momentsG) / weight)
          , b = Math.round(self.volume(cube, self.momentsB) / weight);
        colors.push(-16777216 | (r & 255) << 16 | (g & 255) << 8 | b & 255)
      }
    }
    const pixelToCount = new Map
      , points = []
      , pixels_ = []
      , pointProvider = new LabPointProvider;
    let pointCount = 0;
    for (let i = 0; i < pixels.length; i++) {
      const inputPixel = pixels[i]
        , pixelCount = pixelToCount.get(inputPixel);
      void 0 === pixelCount ? (pointCount++,
        points.push(labFromInt(inputPixel)),
        pixels_.push(inputPixel),
        pixelToCount.set(inputPixel, 1)) : pixelToCount.set(inputPixel, pixelCount + 1)
    }
    const counts = [];
    for (let i = 0; i < pointCount; i++) {
      const count = pixelToCount.get(pixels_[i]);
      void 0 !== count && (counts[i] = count)
    }
    let clusterCount = Math.min(256, pointCount);
    0 < colors.length && (clusterCount = Math.min(clusterCount, colors.length));
    const clusters = [];
    for (let i = 0; i < colors.length; i++)
      clusters.push(labFromInt(colors[i]));
    const additionalClustersNeeded = clusterCount - clusters.length;
    if (0 === colors.length && 0 < additionalClustersNeeded)
      for (let i = 0; i < additionalClustersNeeded; i++)
        clusters.push([100 * Math.random(), 201 * Math.random() + -100, 201 * Math.random() + -100]);
    const clusterIndices = [];
    for (let i = 0; i < pointCount; i++)
      clusterIndices.push(Math.floor(Math.random() * clusterCount));
    const indexMatrix = [];
    for (let i = 0; i < clusterCount; i++) {
      indexMatrix.push([]);
      for (let j = 0; j < clusterCount; j++)
        indexMatrix[i].push(0)
    }
    const distanceToIndexMatrix = [];
    for (let i = 0; i < clusterCount; i++) {
      distanceToIndexMatrix.push([]);
      for (let j = 0; j < clusterCount; j++)
        distanceToIndexMatrix[i].push(new quantizer_wsmeans_DistanceAndIndex)
    }
    const pixelCountSums = [];
    for (let i = 0; i < clusterCount; i++)
      pixelCountSums.push(0);
    for (let iteration = 0; 10 > iteration; iteration++) {
      for (let i = 0; i < clusterCount; i++) {
        for (let j = i + 1; j < clusterCount; j++) {
          const distance = pointProvider.distance(clusters[i], clusters[j]);
          distanceToIndexMatrix[j][i].distance = distance;
          distanceToIndexMatrix[j][i].index = i;
          distanceToIndexMatrix[i][j].distance = distance;
          distanceToIndexMatrix[i][j].index = j
        }
        distanceToIndexMatrix[i].sort();
        for (let j = 0; j < clusterCount; j++)
          indexMatrix[i][j] = distanceToIndexMatrix[i][j].index
      }
      let pointsMoved = 0;
      for (let i = 0; i < pointCount; i++) {
        const point = points[i]
          , previousClusterIndex = clusterIndices[i]
          , previousDistance = pointProvider.distance(point, clusters[previousClusterIndex]);
        let minimumDistance = previousDistance
          , newClusterIndex = -1;
        for (let j = 0; j < clusterCount; j++) {
          if (distanceToIndexMatrix[previousClusterIndex][j].distance >= 4 * previousDistance)
            continue;
          const distance = pointProvider.distance(point, clusters[j]);
          distance < minimumDistance && (minimumDistance = distance,
            newClusterIndex = j)
        }
        -1 !== newClusterIndex && 3 < Math.abs(Math.sqrt(minimumDistance) - Math.sqrt(previousDistance)) && (pointsMoved++,
          clusterIndices[i] = newClusterIndex)
      }
      if (0 === pointsMoved && 0 !== iteration)
        break;
      const componentASums = Array(clusterCount).fill(0)
        , componentBSums = Array(clusterCount).fill(0)
        , componentCSums = Array(clusterCount).fill(0);
      for (let i = 0; i < clusterCount; i++)
        pixelCountSums[i] = 0;
      for (let i = 0; i < pointCount; i++) {
        const clusterIndex = clusterIndices[i]
          , point = points[i]
          , count = counts[i];
        pixelCountSums[clusterIndex] += count;
        componentASums[clusterIndex] += point[0] * count;
        componentBSums[clusterIndex] += point[1] * count;
        componentCSums[clusterIndex] += point[2] * count
      }
      for (let i = 0; i < clusterCount; i++) {
        const count = pixelCountSums[i];
        clusters[i] = 0 === count ? [0, 0, 0] : [componentASums[i] / count, componentBSums[i] / count, componentCSums[i] / count]
      }
    }
    const argbToPopulation = new Map;
    for (let i = 0; i < clusterCount; i++) {
      const count = pixelCountSums[i];
      if (0 === count)
        continue;
      const possibleNewCluster = pointProvider.toInt(clusters[i]);
      argbToPopulation.has(possibleNewCluster) || argbToPopulation.set(possibleNewCluster, count)
    }
    const ranked = score(argbToPopulation);
    return hexFromInt(ranked[0])
  };

  const materialDynamicColors = async function (from) {
    if (/\#[a-fA-F0-9]{6}/.test(from)) {
      let theme = fromColor(from);
      return {
        light: theme.light,
        dark: theme.dark
      };
    }

    let image = from;
    
    if (from instanceof Blob || from instanceof File)
      image = URL.createObjectURL(from);

    if (from.target && from.target.files[0])
      image = URL.createObjectURL(from.target.files[0]);

    if (from.files && from.files[0])
      image = URL.createObjectURL(from.files[0]);

    let color = await index_seedFromImage(image);
    let theme = fromColor(color);
    return {
      light: theme.light,
      dark: theme.dark
    };
  };

  window.materialDynamicColors = materialDynamicColors;
})();