export const COLOR_NAMES = [
  'white',
  'orange',
  'magenta',
  'light_blue',
  'yellow',
  'lime',
  'pink',
  'gray',
  'light_gray',
  'cyan',
  'purple',
  'blue',
  'brown',
  'green',
  'red',
  'black'
] as const;
export const PATTERN_NAMES = [
  'border',
  'bricks',
  'circle',
  'creeper',
  'cross',
  'curly_border',
  'diagonal_left',
  'diagonal_right',
  'diagonal_up_left',
  'diagonal_up_right',
  'flow',
  'flower',
  'globe',
  'gradient',
  'gradient_up',
  'guster',
  'half_horizontal',
  'half_horizontal_bottom',
  'half_vertical',
  'half_vertical_right',
  'mojang',
  'piglin',
  'rhombus',
  'skull',
  'small_stripes',
  'square_bottom_left',
  'square_bottom_right',
  'square_top_left',
  'square_top_right',
  'straight_cross',
  'stripe_bottom',
  'stripe_center',
  'stripe_downleft',
  'stripe_downright',
  'stripe_left',
  'stripe_middle',
  'stripe_right',
  'stripe_top',
  'triangle_bottom',
  'triangle_top',
  'triangles_bottom',
  'triangles_top'
] as const;

export type ColorName = typeof COLOR_NAMES [number];
export type PatternName = typeof PATTERN_NAMES [number];

export const COLOR_VALUES: Record<ColorName, [number, number, number]> = {
  white: [255, 255, 255],
  orange: [255,136, 51],
  magenta: [187, 68, 187],
  light_blue: [51, 170, 204],
  yellow: [238, 204, 51],
  lime: [136, 221, 17],
  pink: [238, 136, 170],
  gray: [85, 85, 85],
  light_gray: [170, 170, 170],
  cyan: [17, 153, 153],
  purple: [127, 51, 170],
  blue: [51, 68, 170],
  brown: [119, 68, 34],
  green: [102, 119, 34],
  red: [187, 34, 34],
  black: [34, 34, 34]
} as const;

export interface BannerBase {
  name: 'base';
  color: ColorName;
}
export interface BannerPattern {
  name: PatternName;
  color: ColorName;
}