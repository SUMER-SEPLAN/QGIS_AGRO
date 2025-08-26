// Aggregates

// Color

// Conditionals
function fnc_coalesce(values, context) {
    for (i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            return values[i];
        }
        
    }
    return 'ERROR';
};

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.log10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_UvaValordaProduoRmil_59rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Valor da produção (Mil Reais)']  > 0);
    } else {
        return (feature['Valor da produção (Mil Reais)']  > 0);
    }
}


function exp_UvaProduot_60rule0_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Quantidade produzida (Toneladas)']  > 0);
    } else {
        return (feature['Quantidade produzida (Toneladas)']  > 0);
    }
}


function exp_Uvareaplantadaha_61rule0_eval_expression(context) {
    // "Área destinada à colheita (Hectares)" > 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Área destinada à colheita (Hectares)']  > 0);
    } else {
        return (feature['Área destinada à colheita (Hectares)']  > 0);
    }
}


function exp_LimoValordaProduoRmil_62rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" >= 64 AND "Valor da produção (Mil Reais)" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  >= 64.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 100.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  >= 64.0) && (feature['Valor da produção (Mil Reais)']  <= 100.0));
    }
}


function exp_LimoValordaProduoRmil_62rule1_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 100 AND "Valor da produção (Mil Reais)" <= 150

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 100.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 150.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 100.0) && (feature['Valor da produção (Mil Reais)']  <= 150.0));
    }
}


function exp_LimoValordaProduoRmil_62rule2_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 150 AND "Valor da produção (Mil Reais)" <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 150.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 200.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 150.0) && (feature['Valor da produção (Mil Reais)']  <= 200.0));
    }
}


function exp_LimoValordaProduoRmil_62rule3_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 200 AND "Valor da produção (Mil Reais)" <= 250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 200.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 250.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 200.0) && (feature['Valor da produção (Mil Reais)']  <= 250.0));
    }
}


function exp_LimoValordaProduoRmil_62rule4_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 250 AND "Valor da produção (Mil Reais)" <= 272

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 250.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 272.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 250.0) && (feature['Valor da produção (Mil Reais)']  <= 272.0));
    }
}


function exp_LimoValordaProduoRmil_62rule5_eval_expression(context) {
    // "Rendimento médio da produção (Quilogramas por Hectare)" IS NULL OR "Rendimento médio da produção (Quilogramas por Hectare)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    } else {
        return ((feature['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    }
}


function exp_LimoProduot_63rule0_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" >= 40 AND "Quantidade produzida (Toneladas)" <= 60

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  >= 40.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 60.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  >= 40.0) && (feature['Quantidade produzida (Toneladas)']  <= 60.0));
    }
}


function exp_LimoProduot_63rule1_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 60 AND "Quantidade produzida (Toneladas)" <= 80

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 60.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 80.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 60.0) && (feature['Quantidade produzida (Toneladas)']  <= 80.0));
    }
}


function exp_LimoProduot_63rule2_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 80 AND "Quantidade produzida (Toneladas)" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 80.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 100.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 80.0) && (feature['Quantidade produzida (Toneladas)']  <= 100.0));
    }
}


function exp_LimoProduot_63rule3_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 100 AND "Quantidade produzida (Toneladas)" <= 120

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 100.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 120.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 100.0) && (feature['Quantidade produzida (Toneladas)']  <= 120.0));
    }
}


function exp_LimoProduot_63rule4_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 120 AND "Quantidade produzida (Toneladas)" <= 140

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 120.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 140.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 120.0) && (feature['Quantidade produzida (Toneladas)']  <= 140.0));
    }
}


function exp_LimoProduot_63rule5_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 140 AND "Quantidade produzida (Toneladas)" <= 160

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 140.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 160.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 140.0) && (feature['Quantidade produzida (Toneladas)']  <= 160.0));
    }
}


function exp_LimoProduot_63rule6_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" IS NULL OR "Quantidade produzida (Toneladas)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  === null) || (feature.properties['Quantidade produzida (Toneladas)']  == 0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  === null) || (feature['Quantidade produzida (Toneladas)']  == 0));
    }
}


function exp_Limoreaplantadaha_64rule0_eval_expression(context) {
    // "Área colhida (Hectares)" >= 5 AND "Área colhida (Hectares)" <= 6

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  >= 5.0) && (feature.properties['Área colhida (Hectares)']  <= 6.0));
    } else {
        return ((feature['Área colhida (Hectares)']  >= 5.0) && (feature['Área colhida (Hectares)']  <= 6.0));
    }
}


function exp_Limoreaplantadaha_64rule1_eval_expression(context) {
    // "Área colhida (Hectares)" > 6 AND "Área colhida (Hectares)" <= 8

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 6.0) && (feature.properties['Área colhida (Hectares)']  <= 8.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 6.0) && (feature['Área colhida (Hectares)']  <= 8.0));
    }
}


function exp_Limoreaplantadaha_64rule2_eval_expression(context) {
    // "Área colhida (Hectares)" > 8 AND "Área colhida (Hectares)" <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 8.0) && (feature.properties['Área colhida (Hectares)']  <= 10.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 8.0) && (feature['Área colhida (Hectares)']  <= 10.0));
    }
}


function exp_Limoreaplantadaha_64rule3_eval_expression(context) {
    // "Área colhida (Hectares)" > 10 AND "Área colhida (Hectares)" <= 12

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 10.0) && (feature.properties['Área colhida (Hectares)']  <= 12.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 10.0) && (feature['Área colhida (Hectares)']  <= 12.0));
    }
}


function exp_Limoreaplantadaha_64rule4_eval_expression(context) {
    // "Área colhida (Hectares)" > 12 AND "Área colhida (Hectares)" <= 14

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 12.0) && (feature.properties['Área colhida (Hectares)']  <= 14.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 12.0) && (feature['Área colhida (Hectares)']  <= 14.0));
    }
}


function exp_Limoreaplantadaha_64rule5_eval_expression(context) {
    // "Área colhida (Hectares)" > 14 AND "Área colhida (Hectares)" <= 16

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 14.0) && (feature.properties['Área colhida (Hectares)']  <= 16.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 14.0) && (feature['Área colhida (Hectares)']  <= 16.0));
    }
}


function exp_Limoreaplantadaha_64rule6_eval_expression(context) {
    // "Área colhida (Hectares)" IS NULL OR "Área colhida (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  === null) || (feature.properties['Área colhida (Hectares)']  == 0));
    } else {
        return ((feature['Área colhida (Hectares)']  === null) || (feature['Área colhida (Hectares)']  == 0));
    }
}


function exp_MamoValordaProduoRmil_65rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" >= 66 AND "Valor da produção (Mil Reais)" <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  >= 66.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 200.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  >= 66.0) && (feature['Valor da produção (Mil Reais)']  <= 200.0));
    }
}


function exp_MamoValordaProduoRmil_65rule1_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 200 AND "Valor da produção (Mil Reais)" <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 200.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 400.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 200.0) && (feature['Valor da produção (Mil Reais)']  <= 400.0));
    }
}


function exp_MamoValordaProduoRmil_65rule2_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 400 AND "Valor da produção (Mil Reais)" <= 600

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 400.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 600.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 400.0) && (feature['Valor da produção (Mil Reais)']  <= 600.0));
    }
}


function exp_MamoValordaProduoRmil_65rule3_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 600 AND "Valor da produção (Mil Reais)" <= 800

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 600.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 800.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 600.0) && (feature['Valor da produção (Mil Reais)']  <= 800.0));
    }
}


function exp_MamoValordaProduoRmil_65rule4_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 800 AND "Valor da produção (Mil Reais)" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 800.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 1000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 800.0) && (feature['Valor da produção (Mil Reais)']  <= 1000.0));
    }
}


function exp_MamoValordaProduoRmil_65rule5_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 1000 AND "Valor da produção (Mil Reais)" <= 1200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 1000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 1200.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 1000.0) && (feature['Valor da produção (Mil Reais)']  <= 1200.0));
    }
}


function exp_MamoValordaProduoRmil_65rule6_eval_expression(context) {
    // "Rendimento médio da produção (Quilogramas por Hectare)" IS NULL OR "Rendimento médio da produção (Quilogramas por Hectare)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    } else {
        return ((feature['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    }
}


function exp_MamoProduot_66rule0_eval_expression(context) {
    // "Área colhida (Hectares)" >= 3 AND "Área colhida (Hectares)" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  >= 3.0) && (feature.properties['Área colhida (Hectares)']  <= 5.0));
    } else {
        return ((feature['Área colhida (Hectares)']  >= 3.0) && (feature['Área colhida (Hectares)']  <= 5.0));
    }
}


function exp_MamoProduot_66rule1_eval_expression(context) {
    // "Área colhida (Hectares)" > 5 AND "Área colhida (Hectares)" <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 5.0) && (feature.properties['Área colhida (Hectares)']  <= 10.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 5.0) && (feature['Área colhida (Hectares)']  <= 10.0));
    }
}


function exp_MamoProduot_66rule2_eval_expression(context) {
    // "Área colhida (Hectares)" > 10 AND "Área colhida (Hectares)" <= 15

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 10.0) && (feature.properties['Área colhida (Hectares)']  <= 15.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 10.0) && (feature['Área colhida (Hectares)']  <= 15.0));
    }
}


function exp_MamoProduot_66rule3_eval_expression(context) {
    // "Área colhida (Hectares)" > 15 AND "Área colhida (Hectares)" <= 20

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 15.0) && (feature.properties['Área colhida (Hectares)']  <= 20.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 15.0) && (feature['Área colhida (Hectares)']  <= 20.0));
    }
}


function exp_MamoProduot_66rule4_eval_expression(context) {
    // "Área colhida (Hectares)" > 20 AND "Área colhida (Hectares)" <= 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 20.0) && (feature.properties['Área colhida (Hectares)']  <= 25.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 20.0) && (feature['Área colhida (Hectares)']  <= 25.0));
    }
}


function exp_MamoProduot_66rule5_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" IS NULL OR "Quantidade produzida (Toneladas)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  === null) || (feature.properties['Quantidade produzida (Toneladas)']  == 0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  === null) || (feature['Quantidade produzida (Toneladas)']  == 0));
    }
}


function exp_Mamoreaplantadaha_67rule0_eval_expression(context) {
    // "Área colhida (Hectares)" >= 3 AND "Área colhida (Hectares)" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  >= 3.0) && (feature.properties['Área colhida (Hectares)']  <= 5.0));
    } else {
        return ((feature['Área colhida (Hectares)']  >= 3.0) && (feature['Área colhida (Hectares)']  <= 5.0));
    }
}


function exp_Mamoreaplantadaha_67rule1_eval_expression(context) {
    // "Área colhida (Hectares)" > 5 AND "Área colhida (Hectares)" <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 5.0) && (feature.properties['Área colhida (Hectares)']  <= 10.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 5.0) && (feature['Área colhida (Hectares)']  <= 10.0));
    }
}


function exp_Mamoreaplantadaha_67rule2_eval_expression(context) {
    // "Área colhida (Hectares)" > 10 AND "Área colhida (Hectares)" <= 15

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 10.0) && (feature.properties['Área colhida (Hectares)']  <= 15.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 10.0) && (feature['Área colhida (Hectares)']  <= 15.0));
    }
}


function exp_Mamoreaplantadaha_67rule3_eval_expression(context) {
    // "Área colhida (Hectares)" > 15 AND "Área colhida (Hectares)" <= 20

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 15.0) && (feature.properties['Área colhida (Hectares)']  <= 20.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 15.0) && (feature['Área colhida (Hectares)']  <= 20.0));
    }
}


function exp_Mamoreaplantadaha_67rule4_eval_expression(context) {
    // "Área colhida (Hectares)" > 20 AND "Área colhida (Hectares)" <= 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 20.0) && (feature.properties['Área colhida (Hectares)']  <= 25.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 20.0) && (feature['Área colhida (Hectares)']  <= 25.0));
    }
}


function exp_Mamoreaplantadaha_67rule5_eval_expression(context) {
    // "Área colhida (Hectares)" IS NULL OR "Área colhida (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  === null) || (feature.properties['Área colhida (Hectares)']  == 0));
    } else {
        return ((feature['Área colhida (Hectares)']  === null) || (feature['Área colhida (Hectares)']  == 0));
    }
}


function exp_MaracujValordaProduoRmil_68rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" >= 21 AND "Valor da produção (Mil Reais)" <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  >= 21.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 50.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  >= 21.0) && (feature['Valor da produção (Mil Reais)']  <= 50.0));
    }
}


function exp_MaracujValordaProduoRmil_68rule1_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 50 AND "Valor da produção (Mil Reais)" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 50.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 100.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 50.0) && (feature['Valor da produção (Mil Reais)']  <= 100.0));
    }
}


function exp_MaracujValordaProduoRmil_68rule2_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 100 AND "Valor da produção (Mil Reais)" <= 150

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 100.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 150.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 100.0) && (feature['Valor da produção (Mil Reais)']  <= 150.0));
    }
}


function exp_MaracujValordaProduoRmil_68rule3_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 150 AND "Valor da produção (Mil Reais)" <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 150.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 200.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 150.0) && (feature['Valor da produção (Mil Reais)']  <= 200.0));
    }
}


function exp_MaracujValordaProduoRmil_68rule4_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 200 AND "Valor da produção (Mil Reais)" <= 250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 200.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 250.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 200.0) && (feature['Valor da produção (Mil Reais)']  <= 250.0));
    }
}


function exp_MaracujValordaProduoRmil_68rule5_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 250 AND "Valor da produção (Mil Reais)" <= 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 250.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 300.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 250.0) && (feature['Valor da produção (Mil Reais)']  <= 300.0));
    }
}


function exp_MaracujValordaProduoRmil_68rule6_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 300 AND "Valor da produção (Mil Reais)" <= 324

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 300.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 324.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 300.0) && (feature['Valor da produção (Mil Reais)']  <= 324.0));
    }
}


function exp_MaracujValordaProduoRmil_68rule7_eval_expression(context) {
    // "Rendimento médio da produção (Quilogramas por Hectare)" IS NULL OR "Rendimento médio da produção (Quilogramas por Hectare)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    } else {
        return ((feature['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    }
}


function exp_MaracujProduot_69rule0_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" >= 7 AND "Quantidade produzida (Toneladas)" <= 20

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  >= 7.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 20.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  >= 7.0) && (feature['Quantidade produzida (Toneladas)']  <= 20.0));
    }
}


function exp_MaracujProduot_69rule1_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 20 AND "Quantidade produzida (Toneladas)" <= 40

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 20.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 40.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 20.0) && (feature['Quantidade produzida (Toneladas)']  <= 40.0));
    }
}


function exp_MaracujProduot_69rule2_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 40 AND "Quantidade produzida (Toneladas)" <= 60

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 40.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 60.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 40.0) && (feature['Quantidade produzida (Toneladas)']  <= 60.0));
    }
}


function exp_MaracujProduot_69rule3_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 60 AND "Quantidade produzida (Toneladas)" <= 80

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 60.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 80.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 60.0) && (feature['Quantidade produzida (Toneladas)']  <= 80.0));
    }
}


function exp_MaracujProduot_69rule4_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 80 AND "Quantidade produzida (Toneladas)" <= 82

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 80.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 82.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 80.0) && (feature['Quantidade produzida (Toneladas)']  <= 82.0));
    }
}


function exp_MaracujProduot_69rule5_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" IS NULL OR "Quantidade produzida (Toneladas)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  === null) || (feature.properties['Quantidade produzida (Toneladas)']  == 0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  === null) || (feature['Quantidade produzida (Toneladas)']  == 0));
    }
}


function exp_Maracujreaplantadaha_70rule0_eval_expression(context) {
    // "Área colhida (Hectares)" >= 1 AND "Área colhida (Hectares)" <= 2

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  >= 1.0) && (feature.properties['Área colhida (Hectares)']  <= 2.0));
    } else {
        return ((feature['Área colhida (Hectares)']  >= 1.0) && (feature['Área colhida (Hectares)']  <= 2.0));
    }
}


function exp_Maracujreaplantadaha_70rule1_eval_expression(context) {
    // "Área colhida (Hectares)" > 2 AND "Área colhida (Hectares)" <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 2.0) && (feature.properties['Área colhida (Hectares)']  <= 3.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 2.0) && (feature['Área colhida (Hectares)']  <= 3.0));
    }
}


function exp_Maracujreaplantadaha_70rule2_eval_expression(context) {
    // "Área colhida (Hectares)" > 3 AND "Área colhida (Hectares)" <= 4

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 3.0) && (feature.properties['Área colhida (Hectares)']  <= 4.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 3.0) && (feature['Área colhida (Hectares)']  <= 4.0));
    }
}


function exp_Maracujreaplantadaha_70rule3_eval_expression(context) {
    // "Área colhida (Hectares)" > 4 AND "Área colhida (Hectares)" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 4.0) && (feature.properties['Área colhida (Hectares)']  <= 5.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 4.0) && (feature['Área colhida (Hectares)']  <= 5.0));
    }
}


function exp_Maracujreaplantadaha_70rule4_eval_expression(context) {
    // "Área colhida (Hectares)" > 5 AND "Área colhida (Hectares)" <= 6

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 5.0) && (feature.properties['Área colhida (Hectares)']  <= 6.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 5.0) && (feature['Área colhida (Hectares)']  <= 6.0));
    }
}


function exp_Maracujreaplantadaha_70rule5_eval_expression(context) {
    // "Área colhida (Hectares)" > 6 AND "Área colhida (Hectares)" <= 7

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 6.0) && (feature.properties['Área colhida (Hectares)']  <= 7.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 6.0) && (feature['Área colhida (Hectares)']  <= 7.0));
    }
}


function exp_Maracujreaplantadaha_70rule6_eval_expression(context) {
    // "Área colhida (Hectares)" > 7 AND "Área colhida (Hectares)" <= 8

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 7.0) && (feature.properties['Área colhida (Hectares)']  <= 8.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 7.0) && (feature['Área colhida (Hectares)']  <= 8.0));
    }
}


function exp_Maracujreaplantadaha_70rule7_eval_expression(context) {
    // "Área colhida (Hectares)" IS NULL OR "Área colhida (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  === null) || (feature.properties['Área colhida (Hectares)']  == 0));
    } else {
        return ((feature['Área colhida (Hectares)']  === null) || (feature['Área colhida (Hectares)']  == 0));
    }
}


function exp_GoiabaValordaProduoRmil_71rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" >= 96 AND "Valor da produção (Mil Reais)" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  >= 96.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 100.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  >= 96.0) && (feature['Valor da produção (Mil Reais)']  <= 100.0));
    }
}


function exp_GoiabaValordaProduoRmil_71rule1_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 100 AND "Valor da produção (Mil Reais)" <= 150

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 100.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 150.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 100.0) && (feature['Valor da produção (Mil Reais)']  <= 150.0));
    }
}


function exp_GoiabaValordaProduoRmil_71rule2_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 150 AND "Valor da produção (Mil Reais)" <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 150.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 200.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 150.0) && (feature['Valor da produção (Mil Reais)']  <= 200.0));
    }
}


function exp_GoiabaValordaProduoRmil_71rule3_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 200 AND "Valor da produção (Mil Reais)" <= 250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 200.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 250.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 200.0) && (feature['Valor da produção (Mil Reais)']  <= 250.0));
    }
}


function exp_GoiabaValordaProduoRmil_71rule4_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 250 AND "Valor da produção (Mil Reais)" <= 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 250.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 300.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 250.0) && (feature['Valor da produção (Mil Reais)']  <= 300.0));
    }
}


function exp_GoiabaValordaProduoRmil_71rule5_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 300 AND "Valor da produção (Mil Reais)" <= 340

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 300.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 340.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 300.0) && (feature['Valor da produção (Mil Reais)']  <= 340.0));
    }
}


function exp_GoiabaValordaProduoRmil_71rule6_eval_expression(context) {
    // "Rendimento médio da produção (Quilogramas por Hectare)" IS NULL OR "Rendimento médio da produção (Quilogramas por Hectare)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    } else {
        return ((feature['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    }
}


function exp_GoiabaProduot_72rule0_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" >= 50 AND "Quantidade produzida (Toneladas)" <= 60

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  >= 50.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 60.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  >= 50.0) && (feature['Quantidade produzida (Toneladas)']  <= 60.0));
    }
}


function exp_GoiabaProduot_72rule1_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 60 AND "Quantidade produzida (Toneladas)" <= 80

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 60.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 80.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 60.0) && (feature['Quantidade produzida (Toneladas)']  <= 80.0));
    }
}


function exp_GoiabaProduot_72rule2_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 80 AND "Quantidade produzida (Toneladas)" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 80.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 100.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 80.0) && (feature['Quantidade produzida (Toneladas)']  <= 100.0));
    }
}


function exp_GoiabaProduot_72rule3_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 100 AND "Quantidade produzida (Toneladas)" <= 120

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 100.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 120.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 100.0) && (feature['Quantidade produzida (Toneladas)']  <= 120.0));
    }
}


function exp_GoiabaProduot_72rule4_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 120 AND "Quantidade produzida (Toneladas)" <= 140

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 120.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 140.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 120.0) && (feature['Quantidade produzida (Toneladas)']  <= 140.0));
    }
}


function exp_GoiabaProduot_72rule5_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 140 AND "Quantidade produzida (Toneladas)" <= 160

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 140.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 160.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 140.0) && (feature['Quantidade produzida (Toneladas)']  <= 160.0));
    }
}


function exp_GoiabaProduot_72rule6_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 160 AND "Quantidade produzida (Toneladas)" <= 180

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 160.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 180.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 160.0) && (feature['Quantidade produzida (Toneladas)']  <= 180.0));
    }
}


function exp_GoiabaProduot_72rule7_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 180 AND "Quantidade produzida (Toneladas)" <= 184

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 180.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 184.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 180.0) && (feature['Quantidade produzida (Toneladas)']  <= 184.0));
    }
}


function exp_GoiabaProduot_72rule8_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" IS NULL OR "Quantidade produzida (Toneladas)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  === null) || (feature.properties['Quantidade produzida (Toneladas)']  == 0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  === null) || (feature['Quantidade produzida (Toneladas)']  == 0));
    }
}


function exp_Goiabareaplantadaha_73rule0_eval_expression(context) {
    // "Área colhida (Hectares)" >= 5 AND "Área colhida (Hectares)" <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  >= 5.0) && (feature.properties['Área colhida (Hectares)']  <= 10.0));
    } else {
        return ((feature['Área colhida (Hectares)']  >= 5.0) && (feature['Área colhida (Hectares)']  <= 10.0));
    }
}


function exp_Goiabareaplantadaha_73rule1_eval_expression(context) {
    // "Área colhida (Hectares)" > 10 AND "Área colhida (Hectares)" <= 15

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 10.0) && (feature.properties['Área colhida (Hectares)']  <= 15.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 10.0) && (feature['Área colhida (Hectares)']  <= 15.0));
    }
}


function exp_Goiabareaplantadaha_73rule2_eval_expression(context) {
    // "Área colhida (Hectares)" > 15 AND "Área colhida (Hectares)" <= 20

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 15.0) && (feature.properties['Área colhida (Hectares)']  <= 20.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 15.0) && (feature['Área colhida (Hectares)']  <= 20.0));
    }
}


function exp_Goiabareaplantadaha_73rule3_eval_expression(context) {
    // "Área colhida (Hectares)" IS NULL OR "Área colhida (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  === null) || (feature.properties['Área colhida (Hectares)']  == 0));
    } else {
        return ((feature['Área colhida (Hectares)']  === null) || (feature['Área colhida (Hectares)']  == 0));
    }
}


function exp_MangaValordaProduoRmil_74rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" >= 14 AND "Valor da produção (Mil Reais)" <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  >= 14.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 200.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  >= 14.0) && (feature['Valor da produção (Mil Reais)']  <= 200.0));
    }
}


function exp_MangaValordaProduoRmil_74rule1_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 200 AND "Valor da produção (Mil Reais)" <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 200.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 400.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 200.0) && (feature['Valor da produção (Mil Reais)']  <= 400.0));
    }
}


function exp_MangaValordaProduoRmil_74rule2_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 400 AND "Valor da produção (Mil Reais)" <= 600

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 400.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 600.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 400.0) && (feature['Valor da produção (Mil Reais)']  <= 600.0));
    }
}


function exp_MangaValordaProduoRmil_74rule3_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 600 AND "Valor da produção (Mil Reais)" <= 800

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 600.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 800.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 600.0) && (feature['Valor da produção (Mil Reais)']  <= 800.0));
    }
}


function exp_MangaValordaProduoRmil_74rule4_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 800 AND "Valor da produção (Mil Reais)" <= 864

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 800.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 864.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 800.0) && (feature['Valor da produção (Mil Reais)']  <= 864.0));
    }
}


function exp_MangaValordaProduoRmil_74rule5_eval_expression(context) {
    // "Rendimento médio da produção (Quilogramas por Hectare)" IS NULL OR "Rendimento médio da produção (Quilogramas por Hectare)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    } else {
        return ((feature['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    }
}


function exp_MangaProduot_75rule0_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" >= 9 AND "Quantidade produzida (Toneladas)" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  >= 9.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 100.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  >= 9.0) && (feature['Quantidade produzida (Toneladas)']  <= 100.0));
    }
}


function exp_MangaProduot_75rule1_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 100 AND "Quantidade produzida (Toneladas)" <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 100.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 200.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 100.0) && (feature['Quantidade produzida (Toneladas)']  <= 200.0));
    }
}


function exp_MangaProduot_75rule2_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 200 AND "Quantidade produzida (Toneladas)" <= 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 200.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 300.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 200.0) && (feature['Quantidade produzida (Toneladas)']  <= 300.0));
    }
}


function exp_MangaProduot_75rule3_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 300 AND "Quantidade produzida (Toneladas)" <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 300.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 400.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 300.0) && (feature['Quantidade produzida (Toneladas)']  <= 400.0));
    }
}


function exp_MangaProduot_75rule4_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 400 AND "Quantidade produzida (Toneladas)" <= 432

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 400.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 432.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 400.0) && (feature['Quantidade produzida (Toneladas)']  <= 432.0));
    }
}


function exp_MangaProduot_75rule5_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" IS NULL OR "Quantidade produzida (Toneladas)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  === null) || (feature.properties['Quantidade produzida (Toneladas)']  == 0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  === null) || (feature['Quantidade produzida (Toneladas)']  == 0));
    }
}


function exp_Mangareaplantadaha_76rule0_eval_expression(context) {
    // "Área colhida (Hectares)" >= 1 AND "Área colhida (Hectares)" <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  >= 1.0) && (feature.properties['Área colhida (Hectares)']  <= 10.0));
    } else {
        return ((feature['Área colhida (Hectares)']  >= 1.0) && (feature['Área colhida (Hectares)']  <= 10.0));
    }
}


function exp_Mangareaplantadaha_76rule1_eval_expression(context) {
    // "Área colhida (Hectares)" > 10 AND "Área colhida (Hectares)" <= 20

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 10.0) && (feature.properties['Área colhida (Hectares)']  <= 20.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 10.0) && (feature['Área colhida (Hectares)']  <= 20.0));
    }
}


function exp_Mangareaplantadaha_76rule2_eval_expression(context) {
    // "Área colhida (Hectares)" > 20 AND "Área colhida (Hectares)" <= 30

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 20.0) && (feature.properties['Área colhida (Hectares)']  <= 30.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 20.0) && (feature['Área colhida (Hectares)']  <= 30.0));
    }
}


function exp_Mangareaplantadaha_76rule3_eval_expression(context) {
    // "Área colhida (Hectares)" > 30 AND "Área colhida (Hectares)" <= 40

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 30.0) && (feature.properties['Área colhida (Hectares)']  <= 40.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 30.0) && (feature['Área colhida (Hectares)']  <= 40.0));
    }
}


function exp_Mangareaplantadaha_76rule4_eval_expression(context) {
    // "Área colhida (Hectares)" IS NULL OR "Área colhida (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  === null) || (feature.properties['Área colhida (Hectares)']  == 0));
    } else {
        return ((feature['Área colhida (Hectares)']  === null) || (feature['Área colhida (Hectares)']  == 0));
    }
}


function exp_LaranjaValordaProduoRmil_77rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" >= 26 AND "Valor da produção (Mil Reais)" <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  >= 26.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 200.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  >= 26.0) && (feature['Valor da produção (Mil Reais)']  <= 200.0));
    }
}


function exp_LaranjaValordaProduoRmil_77rule1_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 200 AND "Valor da produção (Mil Reais)" <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 200.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 400.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 200.0) && (feature['Valor da produção (Mil Reais)']  <= 400.0));
    }
}


function exp_LaranjaValordaProduoRmil_77rule2_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 400 AND "Valor da produção (Mil Reais)" <= 600

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 400.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 600.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 400.0) && (feature['Valor da produção (Mil Reais)']  <= 600.0));
    }
}


function exp_LaranjaValordaProduoRmil_77rule3_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 600 AND "Valor da produção (Mil Reais)" <= 800

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 600.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 800.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 600.0) && (feature['Valor da produção (Mil Reais)']  <= 800.0));
    }
}


function exp_LaranjaValordaProduoRmil_77rule4_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 800 AND "Valor da produção (Mil Reais)" <= 808

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 800.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 808.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 800.0) && (feature['Valor da produção (Mil Reais)']  <= 808.0));
    }
}


function exp_LaranjaValordaProduoRmil_77rule5_eval_expression(context) {
    // "Rendimento médio da produção (Quilogramas por Hectare)" IS NULL OR "Rendimento médio da produção (Quilogramas por Hectare)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    } else {
        return ((feature['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    }
}


function exp_LaranjaProduot_78rule0_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" >= 16 AND "Quantidade produzida (Toneladas)" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  >= 16.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 100.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  >= 16.0) && (feature['Quantidade produzida (Toneladas)']  <= 100.0));
    }
}


function exp_LaranjaProduot_78rule1_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 100 AND "Quantidade produzida (Toneladas)" <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 100.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 200.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 100.0) && (feature['Quantidade produzida (Toneladas)']  <= 200.0));
    }
}


function exp_LaranjaProduot_78rule2_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 200 AND "Quantidade produzida (Toneladas)" <= 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 200.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 300.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 200.0) && (feature['Quantidade produzida (Toneladas)']  <= 300.0));
    }
}


function exp_LaranjaProduot_78rule3_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 300 AND "Quantidade produzida (Toneladas)" <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 300.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 400.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 300.0) && (feature['Quantidade produzida (Toneladas)']  <= 400.0));
    }
}


function exp_LaranjaProduot_78rule4_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 400 AND "Quantidade produzida (Toneladas)" <= 475

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 400.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 475.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 400.0) && (feature['Quantidade produzida (Toneladas)']  <= 475.0));
    }
}


function exp_LaranjaProduot_78rule5_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" IS NULL OR "Quantidade produzida (Toneladas)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  === null) || (feature.properties['Quantidade produzida (Toneladas)']  == 0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  === null) || (feature['Quantidade produzida (Toneladas)']  == 0));
    }
}


function exp_Laranjareaplantadaha_79rule0_eval_expression(context) {
    // "Área colhida (Hectares)" >= 2 AND "Área colhida (Hectares)" <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  >= 2.0) && (feature.properties['Área colhida (Hectares)']  <= 10.0));
    } else {
        return ((feature['Área colhida (Hectares)']  >= 2.0) && (feature['Área colhida (Hectares)']  <= 10.0));
    }
}


function exp_Laranjareaplantadaha_79rule1_eval_expression(context) {
    // "Área colhida (Hectares)" > 10 AND "Área colhida (Hectares)" <= 20

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 10.0) && (feature.properties['Área colhida (Hectares)']  <= 20.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 10.0) && (feature['Área colhida (Hectares)']  <= 20.0));
    }
}


function exp_Laranjareaplantadaha_79rule2_eval_expression(context) {
    // "Área colhida (Hectares)" > 20 AND "Área colhida (Hectares)" <= 30

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 20.0) && (feature.properties['Área colhida (Hectares)']  <= 30.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 20.0) && (feature['Área colhida (Hectares)']  <= 30.0));
    }
}


function exp_Laranjareaplantadaha_79rule3_eval_expression(context) {
    // "Área colhida (Hectares)" > 30 AND "Área colhida (Hectares)" <= 40

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 30.0) && (feature.properties['Área colhida (Hectares)']  <= 40.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 30.0) && (feature['Área colhida (Hectares)']  <= 40.0));
    }
}


function exp_Laranjareaplantadaha_79rule4_eval_expression(context) {
    // "Área colhida (Hectares)" > 40 AND "Área colhida (Hectares)" <= 45

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 40.0) && (feature.properties['Área colhida (Hectares)']  <= 45.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 40.0) && (feature['Área colhida (Hectares)']  <= 45.0));
    }
}


function exp_Laranjareaplantadaha_79rule5_eval_expression(context) {
    // "Área colhida (Hectares)" IS NULL OR "Área colhida (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  === null) || (feature.properties['Área colhida (Hectares)']  == 0));
    } else {
        return ((feature['Área colhida (Hectares)']  === null) || (feature['Área colhida (Hectares)']  == 0));
    }
}


function exp_CocodabaaValordaProduoRmil_80rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" >= 20 AND "Valor da produção (Mil Reais)" <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  >= 20.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 500.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  >= 20.0) && (feature['Valor da produção (Mil Reais)']  <= 500.0));
    }
}


function exp_CocodabaaValordaProduoRmil_80rule1_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 500 AND "Valor da produção (Mil Reais)" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 500.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 1000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 500.0) && (feature['Valor da produção (Mil Reais)']  <= 1000.0));
    }
}


function exp_CocodabaaValordaProduoRmil_80rule2_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 1000 AND "Valor da produção (Mil Reais)" <= 1500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 1000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 1500.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 1000.0) && (feature['Valor da produção (Mil Reais)']  <= 1500.0));
    }
}


function exp_CocodabaaValordaProduoRmil_80rule3_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 1500 AND "Valor da produção (Mil Reais)" <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 1500.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 2000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 1500.0) && (feature['Valor da produção (Mil Reais)']  <= 2000.0));
    }
}


function exp_CocodabaaValordaProduoRmil_80rule4_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 2000 AND "Valor da produção (Mil Reais)" <= 2022

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 2000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 2022.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 2000.0) && (feature['Valor da produção (Mil Reais)']  <= 2022.0));
    }
}


function exp_CocodabaaValordaProduoRmil_80rule5_eval_expression(context) {
    // "Rendimento médio da produção (Quilogramas por Hectare)" IS NULL OR "Rendimento médio da produção (Quilogramas por Hectare)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    } else {
        return ((feature['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    }
}


function exp_CocodabaaProduot_81rule0_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" >= 20 AND "Quantidade produzida (Toneladas)" <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  >= 20.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 500.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  >= 20.0) && (feature['Quantidade produzida (Toneladas)']  <= 500.0));
    }
}


function exp_CocodabaaProduot_81rule1_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 500 AND "Quantidade produzida (Toneladas)" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 500.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 1000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 500.0) && (feature['Quantidade produzida (Toneladas)']  <= 1000.0));
    }
}


function exp_CocodabaaProduot_81rule2_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 1000 AND "Quantidade produzida (Toneladas)" <= 1500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 1000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 1500.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 1000.0) && (feature['Quantidade produzida (Toneladas)']  <= 1500.0));
    }
}


function exp_CocodabaaProduot_81rule3_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 1500 AND "Quantidade produzida (Toneladas)" <= 1926

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 1500.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 1926.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 1500.0) && (feature['Quantidade produzida (Toneladas)']  <= 1926.0));
    }
}


function exp_CocodabaaProduot_81rule4_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" IS NULL OR "Quantidade produzida (Toneladas)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  === null) || (feature.properties['Quantidade produzida (Toneladas)']  == 0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  === null) || (feature['Quantidade produzida (Toneladas)']  == 0));
    }
}


function exp_Cocodabaareaplantadaha_82rule0_eval_expression(context) {
    // "Área colhida (Hectares)" >= 2 AND "Área colhida (Hectares)" <= 20

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  >= 2.0) && (feature.properties['Área colhida (Hectares)']  <= 20.0));
    } else {
        return ((feature['Área colhida (Hectares)']  >= 2.0) && (feature['Área colhida (Hectares)']  <= 20.0));
    }
}


function exp_Cocodabaareaplantadaha_82rule1_eval_expression(context) {
    // "Área colhida (Hectares)" > 20 AND "Área colhida (Hectares)" <= 40

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 20.0) && (feature.properties['Área colhida (Hectares)']  <= 40.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 20.0) && (feature['Área colhida (Hectares)']  <= 40.0));
    }
}


function exp_Cocodabaareaplantadaha_82rule2_eval_expression(context) {
    // "Área colhida (Hectares)" > 40 AND "Área colhida (Hectares)" <= 60

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 40.0) && (feature.properties['Área colhida (Hectares)']  <= 60.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 40.0) && (feature['Área colhida (Hectares)']  <= 60.0));
    }
}


function exp_Cocodabaareaplantadaha_82rule3_eval_expression(context) {
    // "Área colhida (Hectares)" > 60 AND "Área colhida (Hectares)" <= 80

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 60.0) && (feature.properties['Área colhida (Hectares)']  <= 80.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 60.0) && (feature['Área colhida (Hectares)']  <= 80.0));
    }
}


function exp_Cocodabaareaplantadaha_82rule4_eval_expression(context) {
    // "Área colhida (Hectares)" > 80 AND "Área colhida (Hectares)" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 80.0) && (feature.properties['Área colhida (Hectares)']  <= 100.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 80.0) && (feature['Área colhida (Hectares)']  <= 100.0));
    }
}


function exp_Cocodabaareaplantadaha_82rule5_eval_expression(context) {
    // "Área colhida (Hectares)" > 100 AND "Área colhida (Hectares)" <= 120

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 100.0) && (feature.properties['Área colhida (Hectares)']  <= 120.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 100.0) && (feature['Área colhida (Hectares)']  <= 120.0));
    }
}


function exp_Cocodabaareaplantadaha_82rule6_eval_expression(context) {
    // "Área colhida (Hectares)" IS NULL OR "Área colhida (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  === null) || (feature.properties['Área colhida (Hectares)']  == 0));
    } else {
        return ((feature['Área colhida (Hectares)']  === null) || (feature['Área colhida (Hectares)']  == 0));
    }
}


function exp_BananacachoValordaProduoRmil_83rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" >= 29 AND "Valor da produção (Mil Reais)" <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  >= 29.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 10000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  >= 29.0) && (feature['Valor da produção (Mil Reais)']  <= 10000.0));
    }
}


function exp_BananacachoValordaProduoRmil_83rule1_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 10000 AND "Valor da produção (Mil Reais)" <= 20000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 10000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 20000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 10000.0) && (feature['Valor da produção (Mil Reais)']  <= 20000.0));
    }
}


function exp_BananacachoValordaProduoRmil_83rule2_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 20000 AND "Valor da produção (Mil Reais)" <= 30000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 20000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 30000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 20000.0) && (feature['Valor da produção (Mil Reais)']  <= 30000.0));
    }
}


function exp_BananacachoValordaProduoRmil_83rule3_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 30000 AND "Valor da produção (Mil Reais)" <= 40000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 30000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 40000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 30000.0) && (feature['Valor da produção (Mil Reais)']  <= 40000.0));
    }
}


function exp_BananacachoValordaProduoRmil_83rule4_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 40000 AND "Valor da produção (Mil Reais)" <= 46466

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 40000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 46466.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 40000.0) && (feature['Valor da produção (Mil Reais)']  <= 46466.0));
    }
}


function exp_BananacachoValordaProduoRmil_83rule5_eval_expression(context) {
    // "Rendimento médio da produção (Quilogramas por Hectare)" IS NULL OR "Rendimento médio da produção (Quilogramas por Hectare)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    } else {
        return ((feature['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    }
}


function exp_BananacachoProduot_84rule0_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" >= 16 AND "Quantidade produzida (Toneladas)" <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  >= 16.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 5000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  >= 16.0) && (feature['Quantidade produzida (Toneladas)']  <= 5000.0));
    }
}


function exp_BananacachoProduot_84rule1_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 5000 AND "Quantidade produzida (Toneladas)" <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 5000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 10000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 5000.0) && (feature['Quantidade produzida (Toneladas)']  <= 10000.0));
    }
}


function exp_BananacachoProduot_84rule2_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 10000 AND "Quantidade produzida (Toneladas)" <= 15000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 10000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 15000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 10000.0) && (feature['Quantidade produzida (Toneladas)']  <= 15000.0));
    }
}


function exp_BananacachoProduot_84rule3_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 15000 AND "Quantidade produzida (Toneladas)" <= 20000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 15000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 20000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 15000.0) && (feature['Quantidade produzida (Toneladas)']  <= 20000.0));
    }
}


function exp_BananacachoProduot_84rule4_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 20000 AND "Quantidade produzida (Toneladas)" <= 24456

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 20000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 24456.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 20000.0) && (feature['Quantidade produzida (Toneladas)']  <= 24456.0));
    }
}


function exp_BananacachoProduot_84rule5_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" IS NULL OR "Quantidade produzida (Toneladas)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  === null) || (feature.properties['Quantidade produzida (Toneladas)']  == 0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  === null) || (feature['Quantidade produzida (Toneladas)']  == 0));
    }
}


function exp_Bananacachoreaplantadaha_85rule0_eval_expression(context) {
    // "Área colhida (Hectares)" >= 1 AND "Área colhida (Hectares)" <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  >= 1.0) && (feature.properties['Área colhida (Hectares)']  <= 200.0));
    } else {
        return ((feature['Área colhida (Hectares)']  >= 1.0) && (feature['Área colhida (Hectares)']  <= 200.0));
    }
}


function exp_Bananacachoreaplantadaha_85rule1_eval_expression(context) {
    // "Área colhida (Hectares)" > 200 AND "Área colhida (Hectares)" <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 200.0) && (feature.properties['Área colhida (Hectares)']  <= 400.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 200.0) && (feature['Área colhida (Hectares)']  <= 400.0));
    }
}


function exp_Bananacachoreaplantadaha_85rule2_eval_expression(context) {
    // "Área colhida (Hectares)" > 400 AND "Área colhida (Hectares)" <= 600

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 400.0) && (feature.properties['Área colhida (Hectares)']  <= 600.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 400.0) && (feature['Área colhida (Hectares)']  <= 600.0));
    }
}


function exp_Bananacachoreaplantadaha_85rule3_eval_expression(context) {
    // "Área colhida (Hectares)" > 600 AND "Área colhida (Hectares)" <= 800

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 600.0) && (feature.properties['Área colhida (Hectares)']  <= 800.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 600.0) && (feature['Área colhida (Hectares)']  <= 800.0));
    }
}


function exp_Bananacachoreaplantadaha_85rule4_eval_expression(context) {
    // "Área colhida (Hectares)" > 800 AND "Área colhida (Hectares)" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 800.0) && (feature.properties['Área colhida (Hectares)']  <= 1000.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 800.0) && (feature['Área colhida (Hectares)']  <= 1000.0));
    }
}


function exp_Bananacachoreaplantadaha_85rule5_eval_expression(context) {
    // "Área colhida (Hectares)" > 1000 AND "Área colhida (Hectares)" <= 1075

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 1000.0) && (feature.properties['Área colhida (Hectares)']  <= 1075.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 1000.0) && (feature['Área colhida (Hectares)']  <= 1075.0));
    }
}


function exp_Bananacachoreaplantadaha_85rule6_eval_expression(context) {
    // "Área colhida (Hectares)" IS NULL OR "Área colhida (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  === null) || (feature.properties['Área colhida (Hectares)']  == 0));
    } else {
        return ((feature['Área colhida (Hectares)']  === null) || (feature['Área colhida (Hectares)']  == 0));
    }
}


function exp_CastanhadecajuValordaProduoRmil_86rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" >= 2 AND "Valor da produção (Mil Reais)" <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  >= 2.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 5000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  >= 2.0) && (feature['Valor da produção (Mil Reais)']  <= 5000.0));
    }
}


function exp_CastanhadecajuValordaProduoRmil_86rule1_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 5000 AND "Valor da produção (Mil Reais)" <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 5000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 10000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 5000.0) && (feature['Valor da produção (Mil Reais)']  <= 10000.0));
    }
}


function exp_CastanhadecajuValordaProduoRmil_86rule2_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 10000 AND "Valor da produção (Mil Reais)" <= 15000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 10000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 15000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 10000.0) && (feature['Valor da produção (Mil Reais)']  <= 15000.0));
    }
}


function exp_CastanhadecajuValordaProduoRmil_86rule3_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 15000 AND "Valor da produção (Mil Reais)" <= 17820

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 15000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 17820.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 15000.0) && (feature['Valor da produção (Mil Reais)']  <= 17820.0));
    }
}


function exp_CastanhadecajuValordaProduoRmil_86rule4_eval_expression(context) {
    // "Rendimento médio da produção (Quilogramas por Hectare)" IS NULL OR "Rendimento médio da produção (Quilogramas por Hectare)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    } else {
        return ((feature['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    }
}


function exp_CastanhadecajuProduot_87rule0_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" >= 1 AND "Quantidade produzida (Toneladas)" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  >= 1.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 1000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  >= 1.0) && (feature['Quantidade produzida (Toneladas)']  <= 1000.0));
    }
}


function exp_CastanhadecajuProduot_87rule1_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 1000 AND "Quantidade produzida (Toneladas)" <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 1000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 2000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 1000.0) && (feature['Quantidade produzida (Toneladas)']  <= 2000.0));
    }
}


function exp_CastanhadecajuProduot_87rule2_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 2000 AND "Quantidade produzida (Toneladas)" <= 3000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 2000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 3000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 2000.0) && (feature['Quantidade produzida (Toneladas)']  <= 3000.0));
    }
}


function exp_CastanhadecajuProduot_87rule3_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 3000 AND "Quantidade produzida (Toneladas)" <= 4000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 3000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 4000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 3000.0) && (feature['Quantidade produzida (Toneladas)']  <= 4000.0));
    }
}


function exp_CastanhadecajuProduot_87rule4_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 4000 AND "Quantidade produzida (Toneladas)" <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 4000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 5000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 4000.0) && (feature['Quantidade produzida (Toneladas)']  <= 5000.0));
    }
}


function exp_CastanhadecajuProduot_87rule5_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 5000 AND "Quantidade produzida (Toneladas)" <= 5940

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 5000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 5940.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 5000.0) && (feature['Quantidade produzida (Toneladas)']  <= 5940.0));
    }
}


function exp_CastanhadecajuProduot_87rule6_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" IS NULL OR "Quantidade produzida (Toneladas)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  === null) || (feature.properties['Quantidade produzida (Toneladas)']  == 0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  === null) || (feature['Quantidade produzida (Toneladas)']  == 0));
    }
}


function exp_Castanhadecajureaplantadaha_88rule0_eval_expression(context) {
    // "Área colhida (Hectares)" >= 2 AND "Área colhida (Hectares)" <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  >= 2.0) && (feature.properties['Área colhida (Hectares)']  <= 5000.0));
    } else {
        return ((feature['Área colhida (Hectares)']  >= 2.0) && (feature['Área colhida (Hectares)']  <= 5000.0));
    }
}


function exp_Castanhadecajureaplantadaha_88rule1_eval_expression(context) {
    // "Área colhida (Hectares)" > 5000 AND "Área colhida (Hectares)" <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 5000.0) && (feature.properties['Área colhida (Hectares)']  <= 10000.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 5000.0) && (feature['Área colhida (Hectares)']  <= 10000.0));
    }
}


function exp_Castanhadecajureaplantadaha_88rule2_eval_expression(context) {
    // "Área colhida (Hectares)" > 10000 AND "Área colhida (Hectares)" <= 15000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 10000.0) && (feature.properties['Área colhida (Hectares)']  <= 15000.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 10000.0) && (feature['Área colhida (Hectares)']  <= 15000.0));
    }
}


function exp_Castanhadecajureaplantadaha_88rule3_eval_expression(context) {
    // "Área colhida (Hectares)" > 15000 AND "Área colhida (Hectares)" <= 20000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 15000.0) && (feature.properties['Área colhida (Hectares)']  <= 20000.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 15000.0) && (feature['Área colhida (Hectares)']  <= 20000.0));
    }
}


function exp_Castanhadecajureaplantadaha_88rule4_eval_expression(context) {
    // "Área colhida (Hectares)" > 20000 AND "Área colhida (Hectares)" <= 24750

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  > 20000.0) && (feature.properties['Área colhida (Hectares)']  <= 24750.0));
    } else {
        return ((feature['Área colhida (Hectares)']  > 20000.0) && (feature['Área colhida (Hectares)']  <= 24750.0));
    }
}


function exp_Castanhadecajureaplantadaha_88rule5_eval_expression(context) {
    // "Área colhida (Hectares)" IS NULL OR "Área colhida (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  === null) || (feature.properties['Área colhida (Hectares)']  == 0));
    } else {
        return ((feature['Área colhida (Hectares)']  === null) || (feature['Área colhida (Hectares)']  == 0));
    }
}


function exp_MeloValordaProduoRmil_89rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" >= 113 AND "Valor da produção (Mil Reais)" <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  >= 113.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 10000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  >= 113.0) && (feature['Valor da produção (Mil Reais)']  <= 10000.0));
    }
}


function exp_MeloValordaProduoRmil_89rule1_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 10000 AND "Valor da produção (Mil Reais)" <= 20000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 10000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 20000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 10000.0) && (feature['Valor da produção (Mil Reais)']  <= 20000.0));
    }
}


function exp_MeloValordaProduoRmil_89rule2_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 20000 AND "Valor da produção (Mil Reais)" <= 30000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 20000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 30000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 20000.0) && (feature['Valor da produção (Mil Reais)']  <= 30000.0));
    }
}


function exp_MeloValordaProduoRmil_89rule3_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 30000 AND "Valor da produção (Mil Reais)" <= 40000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 30000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 40000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 30000.0) && (feature['Valor da produção (Mil Reais)']  <= 40000.0));
    }
}


function exp_MeloValordaProduoRmil_89rule4_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 40000 AND "Valor da produção (Mil Reais)" <= 50000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 40000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 50000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 40000.0) && (feature['Valor da produção (Mil Reais)']  <= 50000.0));
    }
}


function exp_MeloValordaProduoRmil_89rule5_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 50000 AND "Valor da produção (Mil Reais)" <= 50022

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 50000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 50022.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 50000.0) && (feature['Valor da produção (Mil Reais)']  <= 50022.0));
    }
}


function exp_MeloValordaProduoRmil_89rule6_eval_expression(context) {
    // "Rendimento médio da produção (Quilogramas por Hectare)" IS NULL OR "Rendimento médio da produção (Quilogramas por Hectare)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    } else {
        return ((feature['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    }
}


function exp_MeloProduot_90rule0_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" >= 45 AND "Quantidade produzida (Toneladas)" <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  >= 45.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 5000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  >= 45.0) && (feature['Quantidade produzida (Toneladas)']  <= 5000.0));
    }
}


function exp_MeloProduot_90rule1_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 5000 AND "Quantidade produzida (Toneladas)" <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 5000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 10000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 5000.0) && (feature['Quantidade produzida (Toneladas)']  <= 10000.0));
    }
}


function exp_MeloProduot_90rule2_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 10000 AND "Quantidade produzida (Toneladas)" <= 15000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 10000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 15000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 10000.0) && (feature['Quantidade produzida (Toneladas)']  <= 15000.0));
    }
}


function exp_MeloProduot_90rule3_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 15000 AND "Quantidade produzida (Toneladas)" <= 16674

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 15000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 16674.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 15000.0) && (feature['Quantidade produzida (Toneladas)']  <= 16674.0));
    }
}


function exp_MeloProduot_90rule4_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" IS NULL OR "Quantidade produzida (Toneladas)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  === null) || (feature.properties['Quantidade produzida (Toneladas)']  == 0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  === null) || (feature['Quantidade produzida (Toneladas)']  == 0));
    }
}


function exp_Meloreaplantadaha_91rule0_eval_expression(context) {
    // "Área plantada (Hectares)" >= 2 AND "Área plantada (Hectares)" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  >= 2.0) && (feature.properties['Área plantada (Hectares)']  <= 100.0));
    } else {
        return ((feature['Área plantada (Hectares)']  >= 2.0) && (feature['Área plantada (Hectares)']  <= 100.0));
    }
}


function exp_Meloreaplantadaha_91rule1_eval_expression(context) {
    // "Área plantada (Hectares)" > 100 AND "Área plantada (Hectares)" <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 100.0) && (feature.properties['Área plantada (Hectares)']  <= 200.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 100.0) && (feature['Área plantada (Hectares)']  <= 200.0));
    }
}


function exp_Meloreaplantadaha_91rule2_eval_expression(context) {
    // "Área plantada (Hectares)" > 200 AND "Área plantada (Hectares)" <= 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 200.0) && (feature.properties['Área plantada (Hectares)']  <= 300.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 200.0) && (feature['Área plantada (Hectares)']  <= 300.0));
    }
}


function exp_Meloreaplantadaha_91rule3_eval_expression(context) {
    // "Área plantada (Hectares)" > 300 AND "Área plantada (Hectares)" <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 300.0) && (feature.properties['Área plantada (Hectares)']  <= 400.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 300.0) && (feature['Área plantada (Hectares)']  <= 400.0));
    }
}


function exp_Meloreaplantadaha_91rule4_eval_expression(context) {
    // "Área plantada (Hectares)" > 400 AND "Área plantada (Hectares)" <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 400.0) && (feature.properties['Área plantada (Hectares)']  <= 500.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 400.0) && (feature['Área plantada (Hectares)']  <= 500.0));
    }
}


function exp_Meloreaplantadaha_91rule5_eval_expression(context) {
    // "Área plantada (Hectares)" > 500 AND "Área plantada (Hectares)" <= 555

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 500.0) && (feature.properties['Área plantada (Hectares)']  <= 555.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 500.0) && (feature['Área plantada (Hectares)']  <= 555.0));
    }
}


function exp_Meloreaplantadaha_91rule6_eval_expression(context) {
    // "Área colhida (Hectares)" IS NULL OR "Área colhida (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  === null) || (feature.properties['Área colhida (Hectares)']  == 0));
    } else {
        return ((feature['Área colhida (Hectares)']  === null) || (feature['Área colhida (Hectares)']  == 0));
    }
}


function exp_MelanciaValordaProduoRmil_92rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" >= 0 AND "Valor da produção (Mil Reais)" <= 288

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  >= 0.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 288.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  >= 0.0) && (feature['Valor da produção (Mil Reais)']  <= 288.0));
    }
}


function exp_MelanciaValordaProduoRmil_92rule1_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 288 AND "Valor da produção (Mil Reais)" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 288.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 1000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 288.0) && (feature['Valor da produção (Mil Reais)']  <= 1000.0));
    }
}


function exp_MelanciaValordaProduoRmil_92rule2_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 1000 AND "Valor da produção (Mil Reais)" <= 1800

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 1000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 1800.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 1000.0) && (feature['Valor da produção (Mil Reais)']  <= 1800.0));
    }
}


function exp_MelanciaValordaProduoRmil_92rule3_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 1800 AND "Valor da produção (Mil Reais)" <= 3000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 1800.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 3000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 1800.0) && (feature['Valor da produção (Mil Reais)']  <= 3000.0));
    }
}


function exp_MelanciaValordaProduoRmil_92rule4_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 3000 AND "Valor da produção (Mil Reais)" <= 7603

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 3000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 7603.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 3000.0) && (feature['Valor da produção (Mil Reais)']  <= 7603.0));
    }
}


function exp_MelanciaValordaProduoRmil_92rule5_eval_expression(context) {
    // "Rendimento médio da produção (Quilogramas por Hectare)" IS NULL OR "Rendimento médio da produção (Quilogramas por Hectare)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    } else {
        return ((feature['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    }
}


function exp_MelanciaProduot_93rule0_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" >= 13 AND "Quantidade produzida (Toneladas)" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  >= 13.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 1000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  >= 13.0) && (feature['Quantidade produzida (Toneladas)']  <= 1000.0));
    }
}


function exp_MelanciaProduot_93rule1_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 1000 AND "Quantidade produzida (Toneladas)" <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 1000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 2000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 1000.0) && (feature['Quantidade produzida (Toneladas)']  <= 2000.0));
    }
}


function exp_MelanciaProduot_93rule2_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 2000 AND "Quantidade produzida (Toneladas)" <= 3000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 2000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 3000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 2000.0) && (feature['Quantidade produzida (Toneladas)']  <= 3000.0));
    }
}


function exp_MelanciaProduot_93rule3_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 3000 AND "Quantidade produzida (Toneladas)" <= 4000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 3000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 4000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 3000.0) && (feature['Quantidade produzida (Toneladas)']  <= 4000.0));
    }
}


function exp_MelanciaProduot_93rule4_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 4000 AND "Quantidade produzida (Toneladas)" <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 4000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 5000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 4000.0) && (feature['Quantidade produzida (Toneladas)']  <= 5000.0));
    }
}


function exp_MelanciaProduot_93rule5_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 5000 AND "Quantidade produzida (Toneladas)" <= 6000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 5000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 6000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 5000.0) && (feature['Quantidade produzida (Toneladas)']  <= 6000.0));
    }
}


function exp_MelanciaProduot_93rule6_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 6000 AND "Quantidade produzida (Toneladas)" <= 6912

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 6000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 6912.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 6000.0) && (feature['Quantidade produzida (Toneladas)']  <= 6912.0));
    }
}


function exp_MelanciaProduot_93rule7_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" IS NULL OR "Quantidade produzida (Toneladas)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  === null) || (feature.properties['Quantidade produzida (Toneladas)']  == 0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  === null) || (feature['Quantidade produzida (Toneladas)']  == 0));
    }
}


function exp_Melanciareaplantadaha_94rule0_eval_expression(context) {
    // "Área plantada (Hectares)" >= 2 AND "Área plantada (Hectares)" <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  >= 2.0) && (feature.properties['Área plantada (Hectares)']  <= 50.0));
    } else {
        return ((feature['Área plantada (Hectares)']  >= 2.0) && (feature['Área plantada (Hectares)']  <= 50.0));
    }
}


function exp_Melanciareaplantadaha_94rule1_eval_expression(context) {
    // "Área plantada (Hectares)" > 50 AND "Área plantada (Hectares)" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 50.0) && (feature.properties['Área plantada (Hectares)']  <= 100.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 50.0) && (feature['Área plantada (Hectares)']  <= 100.0));
    }
}


function exp_Melanciareaplantadaha_94rule2_eval_expression(context) {
    // "Área plantada (Hectares)" > 100 AND "Área plantada (Hectares)" <= 150

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 100.0) && (feature.properties['Área plantada (Hectares)']  <= 150.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 100.0) && (feature['Área plantada (Hectares)']  <= 150.0));
    }
}


function exp_Melanciareaplantadaha_94rule3_eval_expression(context) {
    // "Área plantada (Hectares)" > 150 AND "Área plantada (Hectares)" <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 150.0) && (feature.properties['Área plantada (Hectares)']  <= 200.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 150.0) && (feature['Área plantada (Hectares)']  <= 200.0));
    }
}


function exp_Melanciareaplantadaha_94rule4_eval_expression(context) {
    // "Área plantada (Hectares)" > 200 AND "Área plantada (Hectares)" <= 250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 200.0) && (feature.properties['Área plantada (Hectares)']  <= 250.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 200.0) && (feature['Área plantada (Hectares)']  <= 250.0));
    }
}


function exp_Melanciareaplantadaha_94rule5_eval_expression(context) {
    // "Área plantada (Hectares)" > 250 AND "Área plantada (Hectares)" <= 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 250.0) && (feature.properties['Área plantada (Hectares)']  <= 300.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 250.0) && (feature['Área plantada (Hectares)']  <= 300.0));
    }
}


function exp_Melanciareaplantadaha_94rule6_eval_expression(context) {
    // "Área plantada (Hectares)" > 300 AND "Área plantada (Hectares)" <= 320

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 300.0) && (feature.properties['Área plantada (Hectares)']  <= 320.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 300.0) && (feature['Área plantada (Hectares)']  <= 320.0));
    }
}


function exp_Melanciareaplantadaha_94rule7_eval_expression(context) {
    // "Área colhida (Hectares)" IS NULL OR "Área colhida (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  === null) || (feature.properties['Área colhida (Hectares)']  == 0));
    } else {
        return ((feature['Área colhida (Hectares)']  === null) || (feature['Área colhida (Hectares)']  == 0));
    }
}


function exp_CebolaValordaProduoRmil_95rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" >= 10 AND "Valor da produção (Mil Reais)" <= 15

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  >= 10.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 15.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  >= 10.0) && (feature['Valor da produção (Mil Reais)']  <= 15.0));
    }
}


function exp_CebolaValordaProduoRmil_95rule1_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 15 AND "Valor da produção (Mil Reais)" <= 20

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 15.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 20.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 15.0) && (feature['Valor da produção (Mil Reais)']  <= 20.0));
    }
}


function exp_CebolaValordaProduoRmil_95rule2_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 20 AND "Valor da produção (Mil Reais)" <= 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 20.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 25.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 20.0) && (feature['Valor da produção (Mil Reais)']  <= 25.0));
    }
}


function exp_CebolaValordaProduoRmil_95rule3_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 25 AND "Valor da produção (Mil Reais)" <= 30

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 25.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 30.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 25.0) && (feature['Valor da produção (Mil Reais)']  <= 30.0));
    }
}


function exp_CebolaValordaProduoRmil_95rule4_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 30 AND "Valor da produção (Mil Reais)" <= 32

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 30.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 32.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 30.0) && (feature['Valor da produção (Mil Reais)']  <= 32.0));
    }
}


function exp_CebolaValordaProduoRmil_95rule5_eval_expression(context) {
    // "Rendimento médio da produção (Quilogramas por Hectare)" IS NULL OR "Rendimento médio da produção (Quilogramas por Hectare)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    } else {
        return ((feature['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    }
}


function exp_CebolaProduot_96rule0_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" >= 3 AND "Quantidade produzida (Toneladas)" <= 4

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  >= 3.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 4.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  >= 3.0) && (feature['Quantidade produzida (Toneladas)']  <= 4.0));
    }
}


function exp_CebolaProduot_96rule1_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 4 AND "Quantidade produzida (Toneladas)" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 4.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 5.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 4.0) && (feature['Quantidade produzida (Toneladas)']  <= 5.0));
    }
}


function exp_CebolaProduot_96rule2_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 5 AND "Quantidade produzida (Toneladas)" <= 6

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 5.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 6.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 5.0) && (feature['Quantidade produzida (Toneladas)']  <= 6.0));
    }
}


function exp_CebolaProduot_96rule3_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 6 AND "Quantidade produzida (Toneladas)" <= 7

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 6.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 7.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 6.0) && (feature['Quantidade produzida (Toneladas)']  <= 7.0));
    }
}


function exp_CebolaProduot_96rule4_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 7 AND "Quantidade produzida (Toneladas)" <= 8

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 7.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 8.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 7.0) && (feature['Quantidade produzida (Toneladas)']  <= 8.0));
    }
}


function exp_CebolaProduot_96rule5_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 8 AND "Quantidade produzida (Toneladas)" <= 9

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 8.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 9.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 8.0) && (feature['Quantidade produzida (Toneladas)']  <= 9.0));
    }
}


function exp_CebolaProduot_96rule6_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" IS NULL OR "Quantidade produzida (Toneladas)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  === null) || (feature.properties['Quantidade produzida (Toneladas)']  == 0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  === null) || (feature['Quantidade produzida (Toneladas)']  == 0));
    }
}


function exp_Cebolareaplantadaha_97rule0_eval_expression(context) {
    // "Área plantada (Hectares)" >= 1 AND "Área plantada (Hectares)" <= 1.5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  >= 1.0) && (feature.properties['Área plantada (Hectares)']  <= 1.5));
    } else {
        return ((feature['Área plantada (Hectares)']  >= 1.0) && (feature['Área plantada (Hectares)']  <= 1.5));
    }
}


function exp_Cebolareaplantadaha_97rule1_eval_expression(context) {
    // "Área plantada (Hectares)" > 1.5 AND "Área plantada (Hectares)" <= 2

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 1.5) && (feature.properties['Área plantada (Hectares)']  <= 2.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 1.5) && (feature['Área plantada (Hectares)']  <= 2.0));
    }
}


function exp_Cebolareaplantadaha_97rule2_eval_expression(context) {
    // "Área plantada (Hectares)" > 2 AND "Área plantada (Hectares)" <= 2.5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 2.0) && (feature.properties['Área plantada (Hectares)']  <= 2.5));
    } else {
        return ((feature['Área plantada (Hectares)']  > 2.0) && (feature['Área plantada (Hectares)']  <= 2.5));
    }
}


function exp_Cebolareaplantadaha_97rule3_eval_expression(context) {
    // "Área plantada (Hectares)" > 2.5 AND "Área plantada (Hectares)" <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 2.5) && (feature.properties['Área plantada (Hectares)']  <= 3.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 2.5) && (feature['Área plantada (Hectares)']  <= 3.0));
    }
}


function exp_Cebolareaplantadaha_97rule4_eval_expression(context) {
    // "Área colhida (Hectares)" IS NULL OR "Área colhida (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  === null) || (feature.properties['Área colhida (Hectares)']  == 0));
    } else {
        return ((feature['Área colhida (Hectares)']  === null) || (feature['Área colhida (Hectares)']  == 0));
    }
}


function exp_TomateValordaProduoRmil_98rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" >= 68 AND "Valor da produção (Mil Reais)" <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  >= 68.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 2000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  >= 68.0) && (feature['Valor da produção (Mil Reais)']  <= 2000.0));
    }
}


function exp_TomateValordaProduoRmil_98rule1_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 2000 AND "Valor da produção (Mil Reais)" <= 4000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 2000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 4000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 2000.0) && (feature['Valor da produção (Mil Reais)']  <= 4000.0));
    }
}


function exp_TomateValordaProduoRmil_98rule2_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 4000 AND "Valor da produção (Mil Reais)" <= 6000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 4000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 6000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 4000.0) && (feature['Valor da produção (Mil Reais)']  <= 6000.0));
    }
}


function exp_TomateValordaProduoRmil_98rule3_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 6000 AND "Valor da produção (Mil Reais)" <= 8000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 6000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 8000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 6000.0) && (feature['Valor da produção (Mil Reais)']  <= 8000.0));
    }
}


function exp_TomateValordaProduoRmil_98rule4_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 8000 AND "Valor da produção (Mil Reais)" <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 8000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 10000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 8000.0) && (feature['Valor da produção (Mil Reais)']  <= 10000.0));
    }
}


function exp_TomateValordaProduoRmil_98rule5_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 10000 AND "Valor da produção (Mil Reais)" <= 11999

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 10000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 11999.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 10000.0) && (feature['Valor da produção (Mil Reais)']  <= 11999.0));
    }
}


function exp_TomateValordaProduoRmil_98rule6_eval_expression(context) {
    // "Rendimento médio da produção (Quilogramas por Hectare)" IS NULL OR "Rendimento médio da produção (Quilogramas por Hectare)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    } else {
        return ((feature['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    }
}


function exp_TomateProduot_99rule0_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" >= 18 AND "Quantidade produzida (Toneladas)" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  >= 18.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 1000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  >= 18.0) && (feature['Quantidade produzida (Toneladas)']  <= 1000.0));
    }
}


function exp_TomateProduot_99rule1_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 1000 AND "Quantidade produzida (Toneladas)" <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 1000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 2000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 1000.0) && (feature['Quantidade produzida (Toneladas)']  <= 2000.0));
    }
}


function exp_TomateProduot_99rule2_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 2000 AND "Quantidade produzida (Toneladas)" <= 3000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 2000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 3000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 2000.0) && (feature['Quantidade produzida (Toneladas)']  <= 3000.0));
    }
}


function exp_TomateProduot_99rule3_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 3000 AND "Quantidade produzida (Toneladas)" <= 4000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 3000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 4000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 3000.0) && (feature['Quantidade produzida (Toneladas)']  <= 4000.0));
    }
}


function exp_TomateProduot_99rule4_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 4000 AND "Quantidade produzida (Toneladas)" <= 4200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 4000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 4200.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 4000.0) && (feature['Quantidade produzida (Toneladas)']  <= 4200.0));
    }
}


function exp_TomateProduot_99rule5_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" IS NULL OR "Quantidade produzida (Toneladas)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  === null) || (feature.properties['Quantidade produzida (Toneladas)']  == 0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  === null) || (feature['Quantidade produzida (Toneladas)']  == 0));
    }
}


function exp_Tomatereaplantadaha_100rule0_eval_expression(context) {
    // "Área plantada (Hectares)" >= 1 AND "Área plantada (Hectares)" <= 20

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  >= 1.0) && (feature.properties['Área plantada (Hectares)']  <= 20.0));
    } else {
        return ((feature['Área plantada (Hectares)']  >= 1.0) && (feature['Área plantada (Hectares)']  <= 20.0));
    }
}


function exp_Tomatereaplantadaha_100rule1_eval_expression(context) {
    // "Área plantada (Hectares)" > 20 AND "Área plantada (Hectares)" <= 40

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 20.0) && (feature.properties['Área plantada (Hectares)']  <= 40.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 20.0) && (feature['Área plantada (Hectares)']  <= 40.0));
    }
}


function exp_Tomatereaplantadaha_100rule2_eval_expression(context) {
    // "Área plantada (Hectares)" > 40 AND "Área plantada (Hectares)" <= 60

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 40.0) && (feature.properties['Área plantada (Hectares)']  <= 60.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 40.0) && (feature['Área plantada (Hectares)']  <= 60.0));
    }
}


function exp_Tomatereaplantadaha_100rule3_eval_expression(context) {
    // "Área plantada (Hectares)" > 60 AND "Área plantada (Hectares)" <= 80

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 60.0) && (feature.properties['Área plantada (Hectares)']  <= 80.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 60.0) && (feature['Área plantada (Hectares)']  <= 80.0));
    }
}


function exp_Tomatereaplantadaha_100rule4_eval_expression(context) {
    // "Área plantada (Hectares)" > 80 AND "Área plantada (Hectares)" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 80.0) && (feature.properties['Área plantada (Hectares)']  <= 100.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 80.0) && (feature['Área plantada (Hectares)']  <= 100.0));
    }
}


function exp_Tomatereaplantadaha_100rule5_eval_expression(context) {
    // "Área colhida (Hectares)" IS NULL OR "Área colhida (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  === null) || (feature.properties['Área colhida (Hectares)']  == 0));
    } else {
        return ((feature['Área colhida (Hectares)']  === null) || (feature['Área colhida (Hectares)']  == 0));
    }
}


function exp_BatatadoceValordaProduoRmil_101rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" >= 9 AND "Valor da produção (Mil Reais)" <= 20

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  >= 9.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 20.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  >= 9.0) && (feature['Valor da produção (Mil Reais)']  <= 20.0));
    }
}


function exp_BatatadoceValordaProduoRmil_101rule1_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 20 AND "Valor da produção (Mil Reais)" <= 40

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 20.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 40.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 20.0) && (feature['Valor da produção (Mil Reais)']  <= 40.0));
    }
}


function exp_BatatadoceValordaProduoRmil_101rule2_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 40 AND "Valor da produção (Mil Reais)" <= 60

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 40.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 60.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 40.0) && (feature['Valor da produção (Mil Reais)']  <= 60.0));
    }
}


function exp_BatatadoceValordaProduoRmil_101rule3_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 60 AND "Valor da produção (Mil Reais)" <= 80

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 60.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 80.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 60.0) && (feature['Valor da produção (Mil Reais)']  <= 80.0));
    }
}


function exp_BatatadoceValordaProduoRmil_101rule4_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 80 AND "Valor da produção (Mil Reais)" <= 84

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 80.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 84.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 80.0) && (feature['Valor da produção (Mil Reais)']  <= 84.0));
    }
}


function exp_BatatadoceValordaProduoRmil_101rule5_eval_expression(context) {
    // "Rendimento médio da produção (Quilogramas por Hectare)" IS NULL OR "Rendimento médio da produção (Quilogramas por Hectare)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    } else {
        return ((feature['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    }
}


function exp_BatatadoceProduot_102rule0_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" >= 4 AND "Quantidade produzida (Toneladas)" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  >= 4.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 5.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  >= 4.0) && (feature['Quantidade produzida (Toneladas)']  <= 5.0));
    }
}


function exp_BatatadoceProduot_102rule1_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 5 AND "Quantidade produzida (Toneladas)" <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 5.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 10.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 5.0) && (feature['Quantidade produzida (Toneladas)']  <= 10.0));
    }
}


function exp_BatatadoceProduot_102rule2_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 10 AND "Quantidade produzida (Toneladas)" <= 15

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 10.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 15.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 10.0) && (feature['Quantidade produzida (Toneladas)']  <= 15.0));
    }
}


function exp_BatatadoceProduot_102rule3_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 15 AND "Quantidade produzida (Toneladas)" <= 20

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 15.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 20.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 15.0) && (feature['Quantidade produzida (Toneladas)']  <= 20.0));
    }
}


function exp_BatatadoceProduot_102rule4_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 20 AND "Quantidade produzida (Toneladas)" <= 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 20.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 25.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 20.0) && (feature['Quantidade produzida (Toneladas)']  <= 25.0));
    }
}


function exp_BatatadoceProduot_102rule5_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 25 AND "Quantidade produzida (Toneladas)" <= 30

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 25.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 30.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 25.0) && (feature['Quantidade produzida (Toneladas)']  <= 30.0));
    }
}


function exp_BatatadoceProduot_102rule6_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" IS NULL OR "Quantidade produzida (Toneladas)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  === null) || (feature.properties['Quantidade produzida (Toneladas)']  == 0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  === null) || (feature['Quantidade produzida (Toneladas)']  == 0));
    }
}


function exp_Batatadocereaplantadaha_103rule0_eval_expression(context) {
    // "Área plantada (Hectares)" >= 1 AND "Área plantada (Hectares)" <= 2

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  >= 1.0) && (feature.properties['Área plantada (Hectares)']  <= 2.0));
    } else {
        return ((feature['Área plantada (Hectares)']  >= 1.0) && (feature['Área plantada (Hectares)']  <= 2.0));
    }
}


function exp_Batatadocereaplantadaha_103rule1_eval_expression(context) {
    // "Área plantada (Hectares)" > 2 AND "Área plantada (Hectares)" <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 2.0) && (feature.properties['Área plantada (Hectares)']  <= 3.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 2.0) && (feature['Área plantada (Hectares)']  <= 3.0));
    }
}


function exp_Batatadocereaplantadaha_103rule2_eval_expression(context) {
    // "Área plantada (Hectares)" > 3 AND "Área plantada (Hectares)" <= 4

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 3.0) && (feature.properties['Área plantada (Hectares)']  <= 4.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 3.0) && (feature['Área plantada (Hectares)']  <= 4.0));
    }
}


function exp_Batatadocereaplantadaha_103rule3_eval_expression(context) {
    // "Área plantada (Hectares)" > 4 AND "Área plantada (Hectares)" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 4.0) && (feature.properties['Área plantada (Hectares)']  <= 5.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 4.0) && (feature['Área plantada (Hectares)']  <= 5.0));
    }
}


function exp_Batatadocereaplantadaha_103rule4_eval_expression(context) {
    // "Área plantada (Hectares)" > 5 AND "Área plantada (Hectares)" <= 6

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 5.0) && (feature.properties['Área plantada (Hectares)']  <= 6.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 5.0) && (feature['Área plantada (Hectares)']  <= 6.0));
    }
}


function exp_Batatadocereaplantadaha_103rule5_eval_expression(context) {
    // "Área plantada (Hectares)" > 6 AND "Área plantada (Hectares)" <= 7

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 6.0) && (feature.properties['Área plantada (Hectares)']  <= 7.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 6.0) && (feature['Área plantada (Hectares)']  <= 7.0));
    }
}


function exp_Batatadocereaplantadaha_103rule6_eval_expression(context) {
    // "Área plantada (Hectares)" > 7 AND "Área plantada (Hectares)" <= 8

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 7.0) && (feature.properties['Área plantada (Hectares)']  <= 8.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 7.0) && (feature['Área plantada (Hectares)']  <= 8.0));
    }
}


function exp_Batatadocereaplantadaha_103rule7_eval_expression(context) {
    // "Área colhida (Hectares)" IS NULL OR "Área colhida (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  === null) || (feature.properties['Área colhida (Hectares)']  == 0));
    } else {
        return ((feature['Área colhida (Hectares)']  === null) || (feature['Área colhida (Hectares)']  == 0));
    }
}


function exp_MandiocaValordaProduoRmil_104rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" >= 14 AND "Valor da produção (Mil Reais)" <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  >= 14.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 10000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  >= 14.0) && (feature['Valor da produção (Mil Reais)']  <= 10000.0));
    }
}


function exp_MandiocaValordaProduoRmil_104rule1_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 10000 AND "Valor da produção (Mil Reais)" <= 20000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 10000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 20000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 10000.0) && (feature['Valor da produção (Mil Reais)']  <= 20000.0));
    }
}


function exp_MandiocaValordaProduoRmil_104rule2_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 20000 AND "Valor da produção (Mil Reais)" <= 30000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 20000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 30000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 20000.0) && (feature['Valor da produção (Mil Reais)']  <= 30000.0));
    }
}


function exp_MandiocaValordaProduoRmil_104rule3_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 30000 AND "Valor da produção (Mil Reais)" <= 40000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 30000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 40000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 30000.0) && (feature['Valor da produção (Mil Reais)']  <= 40000.0));
    }
}


function exp_MandiocaValordaProduoRmil_104rule4_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 40000 AND "Valor da produção (Mil Reais)" <= 50000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 40000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 50000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 40000.0) && (feature['Valor da produção (Mil Reais)']  <= 50000.0));
    }
}


function exp_MandiocaValordaProduoRmil_104rule5_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 50000 AND "Valor da produção (Mil Reais)" <= 57160

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 50000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 57160.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 50000.0) && (feature['Valor da produção (Mil Reais)']  <= 57160.0));
    }
}


function exp_MandiocaValordaProduoRmil_104rule6_eval_expression(context) {
    // "Rendimento médio da produção (Quilogramas por Hectare)" IS NULL OR "Rendimento médio da produção (Quilogramas por Hectare)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    } else {
        return ((feature['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    }
}


function exp_MandiocaProduot_105rule0_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" >= 32 AND "Quantidade produzida (Toneladas)" <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  >= 32.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 10000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  >= 32.0) && (feature['Quantidade produzida (Toneladas)']  <= 10000.0));
    }
}


function exp_MandiocaProduot_105rule1_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 10000 AND "Quantidade produzida (Toneladas)" <= 20000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 10000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 20000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 10000.0) && (feature['Quantidade produzida (Toneladas)']  <= 20000.0));
    }
}


function exp_MandiocaProduot_105rule2_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 20000 AND "Quantidade produzida (Toneladas)" <= 30000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 20000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 30000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 20000.0) && (feature['Quantidade produzida (Toneladas)']  <= 30000.0));
    }
}


function exp_MandiocaProduot_105rule3_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 30000 AND "Quantidade produzida (Toneladas)" <= 40000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 30000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 40000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 30000.0) && (feature['Quantidade produzida (Toneladas)']  <= 40000.0));
    }
}


function exp_MandiocaProduot_105rule4_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 40000 AND "Quantidade produzida (Toneladas)" <= 50000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 40000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 50000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 40000.0) && (feature['Quantidade produzida (Toneladas)']  <= 50000.0));
    }
}


function exp_MandiocaProduot_105rule5_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 50000 AND "Quantidade produzida (Toneladas)" <= 60000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 50000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 60000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 50000.0) && (feature['Quantidade produzida (Toneladas)']  <= 60000.0));
    }
}


function exp_MandiocaProduot_105rule6_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 60000 AND "Quantidade produzida (Toneladas)" <= 65835

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 60000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 65835.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 60000.0) && (feature['Quantidade produzida (Toneladas)']  <= 65835.0));
    }
}


function exp_MandiocaProduot_105rule7_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" IS NULL OR "Quantidade produzida (Toneladas)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  === null) || (feature.properties['Quantidade produzida (Toneladas)']  == 0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  === null) || (feature['Quantidade produzida (Toneladas)']  == 0));
    }
}


function exp_Mandiocareaplantadaha_106rule0_eval_expression(context) {
    // "Área plantada (Hectares)" >= 3 AND "Área plantada (Hectares)" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  >= 3.0) && (feature.properties['Área plantada (Hectares)']  <= 1000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  >= 3.0) && (feature['Área plantada (Hectares)']  <= 1000.0));
    }
}


function exp_Mandiocareaplantadaha_106rule1_eval_expression(context) {
    // "Área plantada (Hectares)" > 1000 AND "Área plantada (Hectares)" <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 1000.0) && (feature.properties['Área plantada (Hectares)']  <= 2000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 1000.0) && (feature['Área plantada (Hectares)']  <= 2000.0));
    }
}


function exp_Mandiocareaplantadaha_106rule2_eval_expression(context) {
    // "Área plantada (Hectares)" > 2000 AND "Área plantada (Hectares)" <= 3000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 2000.0) && (feature.properties['Área plantada (Hectares)']  <= 3000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 2000.0) && (feature['Área plantada (Hectares)']  <= 3000.0));
    }
}


function exp_Mandiocareaplantadaha_106rule3_eval_expression(context) {
    // "Área plantada (Hectares)" > 3000 AND "Área plantada (Hectares)" <= 4000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 3000.0) && (feature.properties['Área plantada (Hectares)']  <= 4000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 3000.0) && (feature['Área plantada (Hectares)']  <= 4000.0));
    }
}


function exp_Mandiocareaplantadaha_106rule4_eval_expression(context) {
    // "Área plantada (Hectares)" > 4000 AND "Área plantada (Hectares)" <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 4000.0) && (feature.properties['Área plantada (Hectares)']  <= 5000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 4000.0) && (feature['Área plantada (Hectares)']  <= 5000.0));
    }
}


function exp_Mandiocareaplantadaha_106rule5_eval_expression(context) {
    // "Área plantada (Hectares)" > 5000 AND "Área plantada (Hectares)" <= 5225

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 5000.0) && (feature.properties['Área plantada (Hectares)']  <= 5225.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 5000.0) && (feature['Área plantada (Hectares)']  <= 5225.0));
    }
}


function exp_Mandiocareaplantadaha_106rule6_eval_expression(context) {
    // "Área colhida (Hectares)" IS NULL OR "Área colhida (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  === null) || (feature.properties['Área colhida (Hectares)']  == 0));
    } else {
        return ((feature['Área colhida (Hectares)']  === null) || (feature['Área colhida (Hectares)']  == 0));
    }
}


function exp_CanadeacarValordaProduoRmil_107rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" >= 8 AND "Valor da produção (Mil Reais)" <= 20000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  >= 8.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 20000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  >= 8.0) && (feature['Valor da produção (Mil Reais)']  <= 20000.0));
    }
}


function exp_CanadeacarValordaProduoRmil_107rule1_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 20000 AND "Valor da produção (Mil Reais)" <= 40000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 20000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 40000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 20000.0) && (feature['Valor da produção (Mil Reais)']  <= 40000.0));
    }
}


function exp_CanadeacarValordaProduoRmil_107rule2_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 40000 AND "Valor da produção (Mil Reais)" <= 60000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 40000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 60000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 40000.0) && (feature['Valor da produção (Mil Reais)']  <= 60000.0));
    }
}


function exp_CanadeacarValordaProduoRmil_107rule3_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 60000 AND "Valor da produção (Mil Reais)" <= 76825

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 60000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 76825.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 60000.0) && (feature['Valor da produção (Mil Reais)']  <= 76825.0));
    }
}


function exp_CanadeacarValordaProduoRmil_107rule4_eval_expression(context) {
    // "Rendimento médio da produção (Quilogramas por Hectare)" IS NULL OR "Rendimento médio da produção (Quilogramas por Hectare)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    } else {
        return ((feature['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    }
}


function exp_CanadeacarProduot_108rule0_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" >= 32 AND "Quantidade produzida (Toneladas)" <= 100000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  >= 32.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 100000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  >= 32.0) && (feature['Quantidade produzida (Toneladas)']  <= 100000.0));
    }
}


function exp_CanadeacarProduot_108rule1_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 100000 AND "Quantidade produzida (Toneladas)" <= 200000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 100000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 200000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 100000.0) && (feature['Quantidade produzida (Toneladas)']  <= 200000.0));
    }
}


function exp_CanadeacarProduot_108rule2_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 200000 AND "Quantidade produzida (Toneladas)" <= 300000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 200000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 300000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 200000.0) && (feature['Quantidade produzida (Toneladas)']  <= 300000.0));
    }
}


function exp_CanadeacarProduot_108rule3_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 300000 AND "Quantidade produzida (Toneladas)" <= 400000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 300000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 400000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 300000.0) && (feature['Quantidade produzida (Toneladas)']  <= 400000.0));
    }
}


function exp_CanadeacarProduot_108rule4_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 400000 AND "Quantidade produzida (Toneladas)" <= 452127

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 400000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 452127.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 400000.0) && (feature['Quantidade produzida (Toneladas)']  <= 452127.0));
    }
}


function exp_CanadeacarProduot_108rule5_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" IS NULL OR "Quantidade produzida (Toneladas)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  === null) || (feature.properties['Quantidade produzida (Toneladas)']  == 0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  === null) || (feature['Quantidade produzida (Toneladas)']  == 0));
    }
}


function exp_Canadeacarreaplantadaha_109rule0_eval_expression(context) {
    // "Área plantada (Hectares)" >= 2 AND "Área plantada (Hectares)" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  >= 2.0) && (feature.properties['Área plantada (Hectares)']  <= 1000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  >= 2.0) && (feature['Área plantada (Hectares)']  <= 1000.0));
    }
}


function exp_Canadeacarreaplantadaha_109rule1_eval_expression(context) {
    // "Área plantada (Hectares)" > 1000 AND "Área plantada (Hectares)" <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 1000.0) && (feature.properties['Área plantada (Hectares)']  <= 2000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 1000.0) && (feature['Área plantada (Hectares)']  <= 2000.0));
    }
}


function exp_Canadeacarreaplantadaha_109rule2_eval_expression(context) {
    // "Área plantada (Hectares)" > 2000 AND "Área plantada (Hectares)" <= 3000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 2000.0) && (feature.properties['Área plantada (Hectares)']  <= 3000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 2000.0) && (feature['Área plantada (Hectares)']  <= 3000.0));
    }
}


function exp_Canadeacarreaplantadaha_109rule3_eval_expression(context) {
    // "Área plantada (Hectares)" > 3000 AND "Área plantada (Hectares)" <= 4000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 3000.0) && (feature.properties['Área plantada (Hectares)']  <= 4000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 3000.0) && (feature['Área plantada (Hectares)']  <= 4000.0));
    }
}


function exp_Canadeacarreaplantadaha_109rule4_eval_expression(context) {
    // "Área plantada (Hectares)" > 4000 AND "Área plantada (Hectares)" <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 4000.0) && (feature.properties['Área plantada (Hectares)']  <= 5000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 4000.0) && (feature['Área plantada (Hectares)']  <= 5000.0));
    }
}


function exp_Canadeacarreaplantadaha_109rule5_eval_expression(context) {
    // "Área plantada (Hectares)" > 5000 AND "Área plantada (Hectares)" <= 6000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 5000.0) && (feature.properties['Área plantada (Hectares)']  <= 6000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 5000.0) && (feature['Área plantada (Hectares)']  <= 6000.0));
    }
}


function exp_Canadeacarreaplantadaha_109rule6_eval_expression(context) {
    // "Área plantada (Hectares)" > 6000 AND "Área plantada (Hectares)" <= 6830

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 6000.0) && (feature.properties['Área plantada (Hectares)']  <= 6830.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 6000.0) && (feature['Área plantada (Hectares)']  <= 6830.0));
    }
}


function exp_Canadeacarreaplantadaha_109rule7_eval_expression(context) {
    // "Área colhida (Hectares)" IS NULL OR "Área colhida (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  === null) || (feature.properties['Área colhida (Hectares)']  == 0));
    } else {
        return ((feature['Área colhida (Hectares)']  === null) || (feature['Área colhida (Hectares)']  == 0));
    }
}


function exp_AlgodoherbceoemcarooValordaProduoRmil_110rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" >= 4 AND "Valor da produção (Mil Reais)" <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  >= 4.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 10000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  >= 4.0) && (feature['Valor da produção (Mil Reais)']  <= 10000.0));
    }
}


function exp_AlgodoherbceoemcarooValordaProduoRmil_110rule1_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 10000 AND "Valor da produção (Mil Reais)" <= 20000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 10000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 20000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 10000.0) && (feature['Valor da produção (Mil Reais)']  <= 20000.0));
    }
}


function exp_AlgodoherbceoemcarooValordaProduoRmil_110rule2_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 20000 AND "Valor da produção (Mil Reais)" <= 30000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 20000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 30000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 20000.0) && (feature['Valor da produção (Mil Reais)']  <= 30000.0));
    }
}


function exp_AlgodoherbceoemcarooValordaProduoRmil_110rule3_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 30000 AND "Valor da produção (Mil Reais)" <= 40000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 30000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 40000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 30000.0) && (feature['Valor da produção (Mil Reais)']  <= 40000.0));
    }
}


function exp_AlgodoherbceoemcarooValordaProduoRmil_110rule4_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 40000 AND "Valor da produção (Mil Reais)" <= 44077

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 40000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 44077.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 40000.0) && (feature['Valor da produção (Mil Reais)']  <= 44077.0));
    }
}


function exp_AlgodoherbceoemcarooValordaProduoRmil_110rule5_eval_expression(context) {
    // "Rendimento médio da produção (Quilogramas por Hectare)" IS NULL OR "Rendimento médio da produção (Quilogramas por Hectare)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    } else {
        return ((feature['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    }
}


function exp_AlgodoherbceoemcarooProduot_111rule0_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" >= 2 AND "Quantidade produzida (Toneladas)" <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  >= 2.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 5000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  >= 2.0) && (feature['Quantidade produzida (Toneladas)']  <= 5000.0));
    }
}


function exp_AlgodoherbceoemcarooProduot_111rule1_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 5000 AND "Quantidade produzida (Toneladas)" <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 5000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 10000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 5000.0) && (feature['Quantidade produzida (Toneladas)']  <= 10000.0));
    }
}


function exp_AlgodoherbceoemcarooProduot_111rule2_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 10000 AND "Quantidade produzida (Toneladas)" <= 15000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 10000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 15000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 10000.0) && (feature['Quantidade produzida (Toneladas)']  <= 15000.0));
    }
}


function exp_AlgodoherbceoemcarooProduot_111rule3_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 15000 AND "Quantidade produzida (Toneladas)" <= 20000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 15000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 20000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 15000.0) && (feature['Quantidade produzida (Toneladas)']  <= 20000.0));
    }
}


function exp_AlgodoherbceoemcarooProduot_111rule4_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 20000 AND "Quantidade produzida (Toneladas)" <= 24086

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 20000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 24086.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 20000.0) && (feature['Quantidade produzida (Toneladas)']  <= 24086.0));
    }
}


function exp_AlgodoherbceoemcarooProduot_111rule5_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" IS NULL OR "Quantidade produzida (Toneladas)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  === null) || (feature.properties['Quantidade produzida (Toneladas)']  == 0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  === null) || (feature['Quantidade produzida (Toneladas)']  == 0));
    }
}


function exp_Algodoherbceoemcarooreaplantadaha_112rule0_eval_expression(context) {
    // "Área plantada (Hectares)" >= 6 AND "Área plantada (Hectares)" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  >= 6.0) && (feature.properties['Área plantada (Hectares)']  <= 1000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  >= 6.0) && (feature['Área plantada (Hectares)']  <= 1000.0));
    }
}


function exp_Algodoherbceoemcarooreaplantadaha_112rule1_eval_expression(context) {
    // "Área plantada (Hectares)" > 1000 AND "Área plantada (Hectares)" <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 1000.0) && (feature.properties['Área plantada (Hectares)']  <= 2000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 1000.0) && (feature['Área plantada (Hectares)']  <= 2000.0));
    }
}


function exp_Algodoherbceoemcarooreaplantadaha_112rule2_eval_expression(context) {
    // "Área plantada (Hectares)" > 2000 AND "Área plantada (Hectares)" <= 3000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 2000.0) && (feature.properties['Área plantada (Hectares)']  <= 3000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 2000.0) && (feature['Área plantada (Hectares)']  <= 3000.0));
    }
}


function exp_Algodoherbceoemcarooreaplantadaha_112rule3_eval_expression(context) {
    // "Área plantada (Hectares)" > 3000 AND "Área plantada (Hectares)" <= 4000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 3000.0) && (feature.properties['Área plantada (Hectares)']  <= 4000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 3000.0) && (feature['Área plantada (Hectares)']  <= 4000.0));
    }
}


function exp_Algodoherbceoemcarooreaplantadaha_112rule4_eval_expression(context) {
    // "Área plantada (Hectares)" > 4000 AND "Área plantada (Hectares)" <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 4000.0) && (feature.properties['Área plantada (Hectares)']  <= 5000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 4000.0) && (feature['Área plantada (Hectares)']  <= 5000.0));
    }
}


function exp_Algodoherbceoemcarooreaplantadaha_112rule5_eval_expression(context) {
    // "Área plantada (Hectares)" > 5000 AND "Área plantada (Hectares)" <= 5537

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 5000.0) && (feature.properties['Área plantada (Hectares)']  <= 5537.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 5000.0) && (feature['Área plantada (Hectares)']  <= 5537.0));
    }
}


function exp_Algodoherbceoemcarooreaplantadaha_112rule6_eval_expression(context) {
    // "Área colhida (Hectares)" IS NULL OR "Área colhida (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  === null) || (feature.properties['Área colhida (Hectares)']  == 0));
    } else {
        return ((feature['Área colhida (Hectares)']  === null) || (feature['Área colhida (Hectares)']  == 0));
    }
}


function exp_AmendoimemcascaValordaProduoRmil_113rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" >= 11 AND "Valor da produção (Mil Reais)" <= 20

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  >= 11.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 20.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  >= 11.0) && (feature['Valor da produção (Mil Reais)']  <= 20.0));
    }
}


function exp_AmendoimemcascaValordaProduoRmil_113rule1_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 20 AND "Valor da produção (Mil Reais)" <= 40

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 20.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 40.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 20.0) && (feature['Valor da produção (Mil Reais)']  <= 40.0));
    }
}


function exp_AmendoimemcascaValordaProduoRmil_113rule2_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 40 AND "Valor da produção (Mil Reais)" <= 60

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 40.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 60.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 40.0) && (feature['Valor da produção (Mil Reais)']  <= 60.0));
    }
}


function exp_AmendoimemcascaValordaProduoRmil_113rule3_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 60 AND "Valor da produção (Mil Reais)" <= 80

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 60.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 80.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 60.0) && (feature['Valor da produção (Mil Reais)']  <= 80.0));
    }
}


function exp_AmendoimemcascaValordaProduoRmil_113rule4_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 80 AND "Valor da produção (Mil Reais)" <= 90

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 80.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 90.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 80.0) && (feature['Valor da produção (Mil Reais)']  <= 90.0));
    }
}


function exp_AmendoimemcascaValordaProduoRmil_113rule5_eval_expression(context) {
    // "Rendimento médio da produção (Quilogramas por Hectare)" IS NULL OR "Rendimento médio da produção (Quilogramas por Hectare)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    } else {
        return ((feature['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    }
}


function exp_AmendoimemcascaProduot_114rule0_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" >= 3 AND "Quantidade produzida (Toneladas)" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  >= 3.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 5.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  >= 3.0) && (feature['Quantidade produzida (Toneladas)']  <= 5.0));
    }
}


function exp_AmendoimemcascaProduot_114rule1_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 5 AND "Quantidade produzida (Toneladas)" <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 5.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 10.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 5.0) && (feature['Quantidade produzida (Toneladas)']  <= 10.0));
    }
}


function exp_AmendoimemcascaProduot_114rule2_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 10 AND "Quantidade produzida (Toneladas)" <= 15

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 10.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 15.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 10.0) && (feature['Quantidade produzida (Toneladas)']  <= 15.0));
    }
}


function exp_AmendoimemcascaProduot_114rule3_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 15 AND "Quantidade produzida (Toneladas)" <= 18

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 15.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 18.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 15.0) && (feature['Quantidade produzida (Toneladas)']  <= 18.0));
    }
}


function exp_AmendoimemcascaProduot_114rule4_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" IS NULL OR "Quantidade produzida (Toneladas)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  === null) || (feature.properties['Quantidade produzida (Toneladas)']  == 0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  === null) || (feature['Quantidade produzida (Toneladas)']  == 0));
    }
}


function exp_Amendoimemcascareaplantadaha_115rule0_eval_expression(context) {
    // "Área plantada (Hectares)" >= 4 AND "Área plantada (Hectares)" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  >= 4.0) && (feature.properties['Área plantada (Hectares)']  <= 5.0));
    } else {
        return ((feature['Área plantada (Hectares)']  >= 4.0) && (feature['Área plantada (Hectares)']  <= 5.0));
    }
}


function exp_Amendoimemcascareaplantadaha_115rule1_eval_expression(context) {
    // "Área plantada (Hectares)" > 5 AND "Área plantada (Hectares)" <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 5.0) && (feature.properties['Área plantada (Hectares)']  <= 10.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 5.0) && (feature['Área plantada (Hectares)']  <= 10.0));
    }
}


function exp_Amendoimemcascareaplantadaha_115rule2_eval_expression(context) {
    // "Área plantada (Hectares)" > 10 AND "Área plantada (Hectares)" <= 15

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 10.0) && (feature.properties['Área plantada (Hectares)']  <= 15.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 10.0) && (feature['Área plantada (Hectares)']  <= 15.0));
    }
}


function exp_Amendoimemcascareaplantadaha_115rule3_eval_expression(context) {
    // "Área plantada (Hectares)" > 15 AND "Área plantada (Hectares)" <= 20

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 15.0) && (feature.properties['Área plantada (Hectares)']  <= 20.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 15.0) && (feature['Área plantada (Hectares)']  <= 20.0));
    }
}


function exp_Amendoimemcascareaplantadaha_115rule4_eval_expression(context) {
    // "Área colhida (Hectares)" IS NULL OR "Área colhida (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  === null) || (feature.properties['Área colhida (Hectares)']  == 0));
    } else {
        return ((feature['Área colhida (Hectares)']  === null) || (feature['Área colhida (Hectares)']  == 0));
    }
}


function exp_ArrozemcascaValordaProduoRmil_116rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" >= 1 AND "Valor da produção (Mil Reais)" <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  >= 1.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 5000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  >= 1.0) && (feature['Valor da produção (Mil Reais)']  <= 5000.0));
    }
}


function exp_ArrozemcascaValordaProduoRmil_116rule1_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 5000 AND "Valor da produção (Mil Reais)" <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 5000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 10000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 5000.0) && (feature['Valor da produção (Mil Reais)']  <= 10000.0));
    }
}


function exp_ArrozemcascaValordaProduoRmil_116rule2_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 10000 AND "Valor da produção (Mil Reais)" <= 15000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 10000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 15000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 10000.0) && (feature['Valor da produção (Mil Reais)']  <= 15000.0));
    }
}


function exp_ArrozemcascaValordaProduoRmil_116rule3_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 15000 AND "Valor da produção (Mil Reais)" <= 19987

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 15000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 19987.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 15000.0) && (feature['Valor da produção (Mil Reais)']  <= 19987.0));
    }
}


function exp_ArrozemcascaValordaProduoRmil_116rule4_eval_expression(context) {
    // "Rendimento médio da produção (Quilogramas por Hectare)" IS NULL OR "Rendimento médio da produção (Quilogramas por Hectare)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    } else {
        return ((feature['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    }
}


function exp_ArrozemcascaProduot_117rule0_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" >= 1 AND "Quantidade produzida (Toneladas)" <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  >= 1.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 2000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  >= 1.0) && (feature['Quantidade produzida (Toneladas)']  <= 2000.0));
    }
}


function exp_ArrozemcascaProduot_117rule1_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 2000 AND "Quantidade produzida (Toneladas)" <= 4000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 2000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 4000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 2000.0) && (feature['Quantidade produzida (Toneladas)']  <= 4000.0));
    }
}


function exp_ArrozemcascaProduot_117rule2_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 4000 AND "Quantidade produzida (Toneladas)" <= 6000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 4000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 6000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 4000.0) && (feature['Quantidade produzida (Toneladas)']  <= 6000.0));
    }
}


function exp_ArrozemcascaProduot_117rule3_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 6000 AND "Quantidade produzida (Toneladas)" <= 8000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 6000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 8000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 6000.0) && (feature['Quantidade produzida (Toneladas)']  <= 8000.0));
    }
}


function exp_ArrozemcascaProduot_117rule4_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 8000 AND "Quantidade produzida (Toneladas)" <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 8000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 10000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 8000.0) && (feature['Quantidade produzida (Toneladas)']  <= 10000.0));
    }
}


function exp_ArrozemcascaProduot_117rule5_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 10000 AND "Quantidade produzida (Toneladas)" <= 11657

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 10000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 11657.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 10000.0) && (feature['Quantidade produzida (Toneladas)']  <= 11657.0));
    }
}


function exp_ArrozemcascaProduot_117rule6_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" IS NULL OR "Quantidade produzida (Toneladas)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  === null) || (feature.properties['Quantidade produzida (Toneladas)']  == 0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  === null) || (feature['Quantidade produzida (Toneladas)']  == 0));
    }
}


function exp_Arrozemcascareaplantadaha_118rule0_eval_expression(context) {
    // "Área plantada (Hectares)" >= 1 AND "Área plantada (Hectares)" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  >= 1.0) && (feature.properties['Área plantada (Hectares)']  <= 1000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  >= 1.0) && (feature['Área plantada (Hectares)']  <= 1000.0));
    }
}


function exp_Arrozemcascareaplantadaha_118rule1_eval_expression(context) {
    // "Área plantada (Hectares)" > 1000 AND "Área plantada (Hectares)" <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 1000.0) && (feature.properties['Área plantada (Hectares)']  <= 2000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 1000.0) && (feature['Área plantada (Hectares)']  <= 2000.0));
    }
}


function exp_Arrozemcascareaplantadaha_118rule2_eval_expression(context) {
    // "Área plantada (Hectares)" > 2000 AND "Área plantada (Hectares)" <= 3000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 2000.0) && (feature.properties['Área plantada (Hectares)']  <= 3000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 2000.0) && (feature['Área plantada (Hectares)']  <= 3000.0));
    }
}


function exp_Arrozemcascareaplantadaha_118rule3_eval_expression(context) {
    // "Área plantada (Hectares)" > 3000 AND "Área plantada (Hectares)" <= 4000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 3000.0) && (feature.properties['Área plantada (Hectares)']  <= 4000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 3000.0) && (feature['Área plantada (Hectares)']  <= 4000.0));
    }
}


function exp_Arrozemcascareaplantadaha_118rule4_eval_expression(context) {
    // "Área plantada (Hectares)" > 4000 AND "Área plantada (Hectares)" <= 4544

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 4000.0) && (feature.properties['Área plantada (Hectares)']  <= 4544.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 4000.0) && (feature['Área plantada (Hectares)']  <= 4544.0));
    }
}


function exp_Arrozemcascareaplantadaha_118rule5_eval_expression(context) {
    // "Área colhida (Hectares)" IS NULL OR "Área colhida (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  === null) || (feature.properties['Área colhida (Hectares)']  == 0));
    } else {
        return ((feature['Área colhida (Hectares)']  === null) || (feature['Área colhida (Hectares)']  == 0));
    }
}


function exp_SorgoemgroValordaProduoRmil_119rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" >= 72 AND "Valor da produção (Mil Reais)" <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  >= 72.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 2000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  >= 72.0) && (feature['Valor da produção (Mil Reais)']  <= 2000.0));
    }
}


function exp_SorgoemgroValordaProduoRmil_119rule1_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 2000 AND "Valor da produção (Mil Reais)" <= 4000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 2000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 4000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 2000.0) && (feature['Valor da produção (Mil Reais)']  <= 4000.0));
    }
}


function exp_SorgoemgroValordaProduoRmil_119rule2_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 4000 AND "Valor da produção (Mil Reais)" <= 6000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 4000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 6000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 4000.0) && (feature['Valor da produção (Mil Reais)']  <= 6000.0));
    }
}


function exp_SorgoemgroValordaProduoRmil_119rule3_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 6000 AND "Valor da produção (Mil Reais)" <= 8000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 6000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 8000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 6000.0) && (feature['Valor da produção (Mil Reais)']  <= 8000.0));
    }
}


function exp_SorgoemgroValordaProduoRmil_119rule4_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 8000 AND "Valor da produção (Mil Reais)" <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 8000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 10000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 8000.0) && (feature['Valor da produção (Mil Reais)']  <= 10000.0));
    }
}


function exp_SorgoemgroValordaProduoRmil_119rule5_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 10000 AND "Valor da produção (Mil Reais)" <= 11244

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 10000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 11244.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 10000.0) && (feature['Valor da produção (Mil Reais)']  <= 11244.0));
    }
}


function exp_SorgoemgroValordaProduoRmil_119rule6_eval_expression(context) {
    // "Rendimento médio da produção (Quilogramas por Hectare)" IS NULL OR "Rendimento médio da produção (Quilogramas por Hectare)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    } else {
        return ((feature['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    }
}


function exp_SorgoemgroProduot_120rule0_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" >= 144 AND "Quantidade produzida (Toneladas)" <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  >= 144.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 5000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  >= 144.0) && (feature['Quantidade produzida (Toneladas)']  <= 5000.0));
    }
}


function exp_SorgoemgroProduot_120rule1_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 5000 AND "Quantidade produzida (Toneladas)" <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 5000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 10000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 5000.0) && (feature['Quantidade produzida (Toneladas)']  <= 10000.0));
    }
}


function exp_SorgoemgroProduot_120rule2_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 10000 AND "Quantidade produzida (Toneladas)" <= 15000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 10000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 15000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 10000.0) && (feature['Quantidade produzida (Toneladas)']  <= 15000.0));
    }
}


function exp_SorgoemgroProduot_120rule3_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 15000 AND "Quantidade produzida (Toneladas)" <= 20000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 15000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 20000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 15000.0) && (feature['Quantidade produzida (Toneladas)']  <= 20000.0));
    }
}


function exp_SorgoemgroProduot_120rule4_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 20000 AND "Quantidade produzida (Toneladas)" <= 22488

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 20000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 22488.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 20000.0) && (feature['Quantidade produzida (Toneladas)']  <= 22488.0));
    }
}


function exp_SorgoemgroProduot_120rule5_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" IS NULL OR "Quantidade produzida (Toneladas)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  === null) || (feature.properties['Quantidade produzida (Toneladas)']  == 0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  === null) || (feature['Quantidade produzida (Toneladas)']  == 0));
    }
}


function exp_Sorgoemgroreaplantadaha_121rule0_eval_expression(context) {
    // "Área plantada (Hectares)" >= 100 AND "Área plantada (Hectares)" <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  >= 100.0) && (feature.properties['Área plantada (Hectares)']  <= 2000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  >= 100.0) && (feature['Área plantada (Hectares)']  <= 2000.0));
    }
}


function exp_Sorgoemgroreaplantadaha_121rule1_eval_expression(context) {
    // "Área plantada (Hectares)" > 2000 AND "Área plantada (Hectares)" <= 4000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 2000.0) && (feature.properties['Área plantada (Hectares)']  <= 4000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 2000.0) && (feature['Área plantada (Hectares)']  <= 4000.0));
    }
}


function exp_Sorgoemgroreaplantadaha_121rule2_eval_expression(context) {
    // "Área plantada (Hectares)" > 4000 AND "Área plantada (Hectares)" <= 6000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 4000.0) && (feature.properties['Área plantada (Hectares)']  <= 6000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 4000.0) && (feature['Área plantada (Hectares)']  <= 6000.0));
    }
}


function exp_Sorgoemgroreaplantadaha_121rule3_eval_expression(context) {
    // "Área plantada (Hectares)" > 6000 AND "Área plantada (Hectares)" <= 8000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 6000.0) && (feature.properties['Área plantada (Hectares)']  <= 8000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 6000.0) && (feature['Área plantada (Hectares)']  <= 8000.0));
    }
}


function exp_Sorgoemgroreaplantadaha_121rule4_eval_expression(context) {
    // "Área plantada (Hectares)" > 8000 AND "Área plantada (Hectares)" <= 9225

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 8000.0) && (feature.properties['Área plantada (Hectares)']  <= 9225.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 8000.0) && (feature['Área plantada (Hectares)']  <= 9225.0));
    }
}


function exp_Sorgoemgroreaplantadaha_121rule5_eval_expression(context) {
    // "Área colhida (Hectares)" IS NULL OR "Área colhida (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  === null) || (feature.properties['Área colhida (Hectares)']  == 0));
    } else {
        return ((feature['Área colhida (Hectares)']  === null) || (feature['Área colhida (Hectares)']  == 0));
    }
}


function exp_SojaemgroValordaProduoRmil_122rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" >= 720 AND "Valor da produção (Mil Reais)" <= 500000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  >= 720.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 500000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  >= 720.0) && (feature['Valor da produção (Mil Reais)']  <= 500000.0));
    }
}


function exp_SojaemgroValordaProduoRmil_122rule1_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 500000 AND "Valor da produção (Mil Reais)" <= 1000000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 500000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 1000000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 500000.0) && (feature['Valor da produção (Mil Reais)']  <= 1000000.0));
    }
}


function exp_SojaemgroValordaProduoRmil_122rule2_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 1000000 AND "Valor da produção (Mil Reais)" <= 1500000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 1000000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 1500000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 1000000.0) && (feature['Valor da produção (Mil Reais)']  <= 1500000.0));
    }
}


function exp_SojaemgroValordaProduoRmil_122rule3_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 1500000 AND "Valor da produção (Mil Reais)" <= 2000000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 1500000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 2000000.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 1500000.0) && (feature['Valor da produção (Mil Reais)']  <= 2000000.0));
    }
}


function exp_SojaemgroValordaProduoRmil_122rule4_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 2000000 AND "Valor da produção (Mil Reais)" <= 2365831

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 2000000.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 2365831.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 2000000.0) && (feature['Valor da produção (Mil Reais)']  <= 2365831.0));
    }
}


function exp_SojaemgroValordaProduoRmil_122rule5_eval_expression(context) {
    // "Rendimento médio da produção (Quilogramas por Hectare)" IS NULL OR "Rendimento médio da produção (Quilogramas por Hectare)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    } else {
        return ((feature['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    }
}


function exp_SojaemgroProduot_123rule0_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" >= 294 AND "Quantidade produzida (Toneladas)" <= 200000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  >= 294.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 200000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  >= 294.0) && (feature['Quantidade produzida (Toneladas)']  <= 200000.0));
    }
}


function exp_SojaemgroProduot_123rule1_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 200000 AND "Quantidade produzida (Toneladas)" <= 400000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 200000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 400000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 200000.0) && (feature['Quantidade produzida (Toneladas)']  <= 400000.0));
    }
}


function exp_SojaemgroProduot_123rule2_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 400000 AND "Quantidade produzida (Toneladas)" <= 600000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 400000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 600000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 400000.0) && (feature['Quantidade produzida (Toneladas)']  <= 600000.0));
    }
}


function exp_SojaemgroProduot_123rule3_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 600000 AND "Quantidade produzida (Toneladas)" <= 800000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 600000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 800000.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 600000.0) && (feature['Quantidade produzida (Toneladas)']  <= 800000.0));
    }
}


function exp_SojaemgroProduot_123rule4_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 800000 AND "Quantidade produzida (Toneladas)" <= 939855

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 800000.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 939855.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 800000.0) && (feature['Quantidade produzida (Toneladas)']  <= 939855.0));
    }
}


function exp_SojaemgroProduot_123rule5_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" IS NULL OR "Quantidade produzida (Toneladas)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  === null) || (feature.properties['Quantidade produzida (Toneladas)']  == 0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  === null) || (feature['Quantidade produzida (Toneladas)']  == 0));
    }
}


function exp_Sojaemgroreaplantadaha_124rule0_eval_expression(context) {
    // "Área plantada (Hectares)" >= 100 AND "Área plantada (Hectares)" <= 50000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  >= 100.0) && (feature.properties['Área plantada (Hectares)']  <= 50000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  >= 100.0) && (feature['Área plantada (Hectares)']  <= 50000.0));
    }
}


function exp_Sojaemgroreaplantadaha_124rule1_eval_expression(context) {
    // "Área plantada (Hectares)" > 50000 AND "Área plantada (Hectares)" <= 100000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 50000.0) && (feature.properties['Área plantada (Hectares)']  <= 100000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 50000.0) && (feature['Área plantada (Hectares)']  <= 100000.0));
    }
}


function exp_Sojaemgroreaplantadaha_124rule2_eval_expression(context) {
    // "Área plantada (Hectares)" > 100000 AND "Área plantada (Hectares)" <= 150000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 100000.0) && (feature.properties['Área plantada (Hectares)']  <= 150000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 100000.0) && (feature['Área plantada (Hectares)']  <= 150000.0));
    }
}


function exp_Sojaemgroreaplantadaha_124rule3_eval_expression(context) {
    // "Área plantada (Hectares)" > 150000 AND "Área plantada (Hectares)" <= 200000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 150000.0) && (feature.properties['Área plantada (Hectares)']  <= 200000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 150000.0) && (feature['Área plantada (Hectares)']  <= 200000.0));
    }
}


function exp_Sojaemgroreaplantadaha_124rule4_eval_expression(context) {
    // "Área plantada (Hectares)" > 200000 AND "Área plantada (Hectares)" <= 250000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 200000.0) && (feature.properties['Área plantada (Hectares)']  <= 250000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 200000.0) && (feature['Área plantada (Hectares)']  <= 250000.0));
    }
}


function exp_Sojaemgroreaplantadaha_124rule5_eval_expression(context) {
    // "Área plantada (Hectares)" > 250000 AND "Área plantada (Hectares)" <= 251303

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 250000.0) && (feature.properties['Área plantada (Hectares)']  <= 251303.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 250000.0) && (feature['Área plantada (Hectares)']  <= 251303.0));
    }
}


function exp_Sojaemgroreaplantadaha_124rule6_eval_expression(context) {
    // "Área colhida (Hectares)" IS NULL OR "Área colhida (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  === null) || (feature.properties['Área colhida (Hectares)']  == 0));
    } else {
        return ((feature['Área colhida (Hectares)']  === null) || (feature['Área colhida (Hectares)']  == 0));
    }
}


function exp_FavaemgroValordaProduoRmil_125rule0_eval_expression(context) {
    // "Valor da produção (Mil Reais)" >= 8 AND "Valor da produção (Mil Reais)" <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  >= 8.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 200.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  >= 8.0) && (feature['Valor da produção (Mil Reais)']  <= 200.0));
    }
}


function exp_FavaemgroValordaProduoRmil_125rule1_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 200 AND "Valor da produção (Mil Reais)" <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 200.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 400.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 200.0) && (feature['Valor da produção (Mil Reais)']  <= 400.0));
    }
}


function exp_FavaemgroValordaProduoRmil_125rule2_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 400 AND "Valor da produção (Mil Reais)" <= 600

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 400.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 600.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 400.0) && (feature['Valor da produção (Mil Reais)']  <= 600.0));
    }
}


function exp_FavaemgroValordaProduoRmil_125rule3_eval_expression(context) {
    // "Valor da produção (Mil Reais)" > 600 AND "Valor da produção (Mil Reais)" <= 750

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Valor da produção (Mil Reais)']  > 600.0) && (feature.properties['Valor da produção (Mil Reais)']  <= 750.0));
    } else {
        return ((feature['Valor da produção (Mil Reais)']  > 600.0) && (feature['Valor da produção (Mil Reais)']  <= 750.0));
    }
}


function exp_FavaemgroValordaProduoRmil_125rule4_eval_expression(context) {
    // "Rendimento médio da produção (Quilogramas por Hectare)" IS NULL OR "Rendimento médio da produção (Quilogramas por Hectare)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature.properties['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    } else {
        return ((feature['Rendimento médio da produção (Quilogramas por Hectare)']  === null) || (feature['Rendimento médio da produção (Quilogramas por Hectare)']  == 0));
    }
}


function exp_FavaemgroProduot_126rule0_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" >= 1 AND "Quantidade produzida (Toneladas)" <= 20

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  >= 1.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 20.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  >= 1.0) && (feature['Quantidade produzida (Toneladas)']  <= 20.0));
    }
}


function exp_FavaemgroProduot_126rule1_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 20 AND "Quantidade produzida (Toneladas)" <= 40

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 20.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 40.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 20.0) && (feature['Quantidade produzida (Toneladas)']  <= 40.0));
    }
}


function exp_FavaemgroProduot_126rule2_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 40 AND "Quantidade produzida (Toneladas)" <= 60

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 40.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 60.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 40.0) && (feature['Quantidade produzida (Toneladas)']  <= 60.0));
    }
}


function exp_FavaemgroProduot_126rule3_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 60 AND "Quantidade produzida (Toneladas)" <= 80

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 60.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 80.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 60.0) && (feature['Quantidade produzida (Toneladas)']  <= 80.0));
    }
}


function exp_FavaemgroProduot_126rule4_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" > 80 AND "Quantidade produzida (Toneladas)" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  > 80.0) && (feature.properties['Quantidade produzida (Toneladas)']  <= 100.0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  > 80.0) && (feature['Quantidade produzida (Toneladas)']  <= 100.0));
    }
}


function exp_FavaemgroProduot_126rule5_eval_expression(context) {
    // "Quantidade produzida (Toneladas)" IS NULL OR "Quantidade produzida (Toneladas)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida (Toneladas)']  === null) || (feature.properties['Quantidade produzida (Toneladas)']  == 0));
    } else {
        return ((feature['Quantidade produzida (Toneladas)']  === null) || (feature['Quantidade produzida (Toneladas)']  == 0));
    }
}


function exp_Favaemgroreaplantadaha_127rule0_eval_expression(context) {
    // "Área plantada (Hectares)" >= 2 AND "Área plantada (Hectares)" <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  >= 2.0) && (feature.properties['Área plantada (Hectares)']  <= 50.0));
    } else {
        return ((feature['Área plantada (Hectares)']  >= 2.0) && (feature['Área plantada (Hectares)']  <= 50.0));
    }
}


function exp_Favaemgroreaplantadaha_127rule1_eval_expression(context) {
    // "Área plantada (Hectares)" > 50 AND "Área plantada (Hectares)" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 50.0) && (feature.properties['Área plantada (Hectares)']  <= 100.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 50.0) && (feature['Área plantada (Hectares)']  <= 100.0));
    }
}


function exp_Favaemgroreaplantadaha_127rule2_eval_expression(context) {
    // "Área plantada (Hectares)" > 100 AND "Área plantada (Hectares)" <= 150

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 100.0) && (feature.properties['Área plantada (Hectares)']  <= 150.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 100.0) && (feature['Área plantada (Hectares)']  <= 150.0));
    }
}


function exp_Favaemgroreaplantadaha_127rule3_eval_expression(context) {
    // "Área plantada (Hectares)" > 150 AND "Área plantada (Hectares)" <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 150.0) && (feature.properties['Área plantada (Hectares)']  <= 200.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 150.0) && (feature['Área plantada (Hectares)']  <= 200.0));
    }
}


function exp_Favaemgroreaplantadaha_127rule4_eval_expression(context) {
    // "Área plantada (Hectares)" > 200 AND "Área plantada (Hectares)" <= 236

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 200.0) && (feature.properties['Área plantada (Hectares)']  <= 236.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 200.0) && (feature['Área plantada (Hectares)']  <= 236.0));
    }
}


function exp_Favaemgroreaplantadaha_127rule5_eval_expression(context) {
    // "Área colhida (Hectares)" IS NULL OR "Área colhida (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área colhida (Hectares)']  === null) || (feature.properties['Área colhida (Hectares)']  == 0));
    } else {
        return ((feature['Área colhida (Hectares)']  === null) || (feature['Área colhida (Hectares)']  == 0));
    }
}


function exp_Feijoemgroreaplantadaha_130rule0_eval_expression(context) {
    // "Área plantada (Hectares)" >= 15 AND "Área plantada (Hectares)" <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  >= 15.0) && (feature.properties['Área plantada (Hectares)']  <= 2000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  >= 15.0) && (feature['Área plantada (Hectares)']  <= 2000.0));
    }
}


function exp_Feijoemgroreaplantadaha_130rule1_eval_expression(context) {
    // "Área plantada (Hectares)" > 2000 AND "Área plantada (Hectares)" <= 4000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 2000.0) && (feature.properties['Área plantada (Hectares)']  <= 4000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 2000.0) && (feature['Área plantada (Hectares)']  <= 4000.0));
    }
}


function exp_Feijoemgroreaplantadaha_130rule2_eval_expression(context) {
    // "Área plantada (Hectares)" > 4000 AND "Área plantada (Hectares)" <= 6000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 4000.0) && (feature.properties['Área plantada (Hectares)']  <= 6000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 4000.0) && (feature['Área plantada (Hectares)']  <= 6000.0));
    }
}


function exp_Feijoemgroreaplantadaha_130rule3_eval_expression(context) {
    // "Área plantada (Hectares)" > 6000 AND "Área plantada (Hectares)" <= 8000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 6000.0) && (feature.properties['Área plantada (Hectares)']  <= 8000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 6000.0) && (feature['Área plantada (Hectares)']  <= 8000.0));
    }
}


function exp_Feijoemgroreaplantadaha_130rule4_eval_expression(context) {
    // "Área plantada (Hectares)" > 8000 AND "Área plantada (Hectares)" <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 8000.0) && (feature.properties['Área plantada (Hectares)']  <= 10000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 8000.0) && (feature['Área plantada (Hectares)']  <= 10000.0));
    }
}


function exp_MilhoemgroProduot_134rule0_eval_expression(context) {
    // "Quantidade produzida" >= 6 AND "Quantidade produzida" <= 100000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida']  >= 6.0) && (feature.properties['Quantidade produzida']  <= 100000.0));
    } else {
        return ((feature['Quantidade produzida']  >= 6.0) && (feature['Quantidade produzida']  <= 100000.0));
    }
}


function exp_MilhoemgroProduot_134rule1_eval_expression(context) {
    // "Quantidade produzida" > 100000 AND "Quantidade produzida" <= 200000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida']  > 100000.0) && (feature.properties['Quantidade produzida']  <= 200000.0));
    } else {
        return ((feature['Quantidade produzida']  > 100000.0) && (feature['Quantidade produzida']  <= 200000.0));
    }
}


function exp_MilhoemgroProduot_134rule2_eval_expression(context) {
    // "Quantidade produzida" > 200000 AND "Quantidade produzida" <= 300000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida']  > 200000.0) && (feature.properties['Quantidade produzida']  <= 300000.0));
    } else {
        return ((feature['Quantidade produzida']  > 200000.0) && (feature['Quantidade produzida']  <= 300000.0));
    }
}


function exp_MilhoemgroProduot_134rule3_eval_expression(context) {
    // "Quantidade produzida" > 300000 AND "Quantidade produzida" <= 358913

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida']  > 300000.0) && (feature.properties['Quantidade produzida']  <= 358913.0));
    } else {
        return ((feature['Quantidade produzida']  > 300000.0) && (feature['Quantidade produzida']  <= 358913.0));
    }
}


function exp_MilhoemgroProduot_134rule4_eval_expression(context) {
    // "Quantidade produzida" IS NULL OR "Quantidade produzida" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Quantidade produzida']  === null) || (feature.properties['Quantidade produzida']  == 0));
    } else {
        return ((feature['Quantidade produzida']  === null) || (feature['Quantidade produzida']  == 0));
    }
}


function exp_Milhoemgroreaplantadaha_135rule0_eval_expression(context) {
    // "Área plantada (Hectares)" >= 2 AND "Área plantada (Hectares)" <= 20000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  >= 2.0) && (feature.properties['Área plantada (Hectares)']  <= 20000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  >= 2.0) && (feature['Área plantada (Hectares)']  <= 20000.0));
    }
}


function exp_Milhoemgroreaplantadaha_135rule1_eval_expression(context) {
    // "Área plantada (Hectares)" > 20000 AND "Área plantada (Hectares)" <= 40000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 20000.0) && (feature.properties['Área plantada (Hectares)']  <= 40000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 20000.0) && (feature['Área plantada (Hectares)']  <= 40000.0));
    }
}


function exp_Milhoemgroreaplantadaha_135rule2_eval_expression(context) {
    // "Área plantada (Hectares)" > 40000 AND "Área plantada (Hectares)" <= 60000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 40000.0) && (feature.properties['Área plantada (Hectares)']  <= 60000.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 40000.0) && (feature['Área plantada (Hectares)']  <= 60000.0));
    }
}


function exp_Milhoemgroreaplantadaha_135rule3_eval_expression(context) {
    // "Área plantada (Hectares)" > 60000 AND "Área plantada (Hectares)" <= 74151

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  > 60000.0) && (feature.properties['Área plantada (Hectares)']  <= 74151.0));
    } else {
        return ((feature['Área plantada (Hectares)']  > 60000.0) && (feature['Área plantada (Hectares)']  <= 74151.0));
    }
}


function exp_Milhoemgroreaplantadaha_135rule4_eval_expression(context) {
    // "Área plantada (Hectares)" IS NULL OR "Área plantada (Hectares)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Área plantada (Hectares)']  === null) || (feature.properties['Área plantada (Hectares)']  == 0));
    } else {
        return ((feature['Área plantada (Hectares)']  === null) || (feature['Área plantada (Hectares)']  == 0));
    }
}


function exp_CisternasentreguesMDS_197rule0_eval_expression(context) {
    // "Total de cisternas entregues" >= 1 AND "Total de cisternas entregues" <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total de cisternas entregues']  >= 1.0) && (feature.properties['Total de cisternas entregues']  <= 500.0));
    } else {
        return ((feature['Total de cisternas entregues']  >= 1.0) && (feature['Total de cisternas entregues']  <= 500.0));
    }
}


function exp_CisternasentreguesMDS_197rule1_eval_expression(context) {
    // "Total de cisternas entregues" > 500 AND "Total de cisternas entregues" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total de cisternas entregues']  > 500.0) && (feature.properties['Total de cisternas entregues']  <= 1000.0));
    } else {
        return ((feature['Total de cisternas entregues']  > 500.0) && (feature['Total de cisternas entregues']  <= 1000.0));
    }
}


function exp_CisternasentreguesMDS_197rule2_eval_expression(context) {
    // "Total de cisternas entregues" > 1000 AND "Total de cisternas entregues" <= 1500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total de cisternas entregues']  > 1000.0) && (feature.properties['Total de cisternas entregues']  <= 1500.0));
    } else {
        return ((feature['Total de cisternas entregues']  > 1000.0) && (feature['Total de cisternas entregues']  <= 1500.0));
    }
}


function exp_CisternasentreguesMDS_197rule3_eval_expression(context) {
    // "Total de cisternas entregues" > 1500 AND "Total de cisternas entregues" <= 2000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total de cisternas entregues']  > 1500.0) && (feature.properties['Total de cisternas entregues']  <= 2000.0));
    } else {
        return ((feature['Total de cisternas entregues']  > 1500.0) && (feature['Total de cisternas entregues']  <= 2000.0));
    }
}


function exp_CisternasentreguesMDS_197rule4_eval_expression(context) {
    // "Total de cisternas entregues" > 2000 AND "Total de cisternas entregues" <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total de cisternas entregues']  > 2000.0) && (feature.properties['Total de cisternas entregues']  <= 2500.0));
    } else {
        return ((feature['Total de cisternas entregues']  > 2000.0) && (feature['Total de cisternas entregues']  <= 2500.0));
    }
}


function exp_CisternasentreguesMDS_197rule5_eval_expression(context) {
    // "Total de cisternas entregues" > 2500 AND "Total de cisternas entregues" <= 2663

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total de cisternas entregues']  > 2500.0) && (feature.properties['Total de cisternas entregues']  <= 2663.0));
    } else {
        return ((feature['Total de cisternas entregues']  > 2500.0) && (feature['Total de cisternas entregues']  <= 2663.0));
    }
}


function exp_CisternasentreguesMDS_197rule6_eval_expression(context) {
    // "Total de cisternas entregues" = 0 OR "Total de cisternas entregues" IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total de cisternas entregues']  == 0) || (feature.properties['Total de cisternas entregues']  === null));
    } else {
        return ((feature['Total de cisternas entregues']  == 0) || (feature['Total de cisternas entregues']  === null));
    }
}


function exp_Cisternasemcontruo_198rule0_eval_expression(context) {
    // "Total em construção" >= 1 AND "Total em construção" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total em construção']  >= 1.0) && (feature.properties['Total em construção']  <= 100.0));
    } else {
        return ((feature['Total em construção']  >= 1.0) && (feature['Total em construção']  <= 100.0));
    }
}


function exp_Cisternasemcontruo_198rule1_eval_expression(context) {
    // "Total em construção" > 100 AND "Total em construção" <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total em construção']  > 100.0) && (feature.properties['Total em construção']  <= 200.0));
    } else {
        return ((feature['Total em construção']  > 100.0) && (feature['Total em construção']  <= 200.0));
    }
}


function exp_Cisternasemcontruo_198rule2_eval_expression(context) {
    // "Total em construção" > 200 AND "Total em construção" <= 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total em construção']  > 200.0) && (feature.properties['Total em construção']  <= 300.0));
    } else {
        return ((feature['Total em construção']  > 200.0) && (feature['Total em construção']  <= 300.0));
    }
}


function exp_Cisternasemcontruo_198rule3_eval_expression(context) {
    // "Total em construção" > 300 AND "Total em construção" <= 311

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total em construção']  > 300.0) && (feature.properties['Total em construção']  <= 311.0));
    } else {
        return ((feature['Total em construção']  > 300.0) && (feature['Total em construção']  <= 311.0));
    }
}


function exp_Cisternasemcontruo_198rule4_eval_expression(context) {
    // "Total em construção" = 0 OR "Total em construção" IS NULL

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Total em construção']  == 0) || (feature.properties['Total em construção']  === null));
    } else {
        return ((feature['Total em construção']  == 0) || (feature['Total em construção']  === null));
    }
}