function encode_data(port, data) {
    var ret = [];

if (port === 100) {
    check_encode("device_eui",
        function(value) {
        },
        function() {
            ret = ret.concat(ret, [ 0x00 ])
        }
    );
    check_encode("app_eui",
        function(value) {
        },
        function() {
            ret = ret.concat(ret, [ 0x01 ])
        }
    );
    check_encode("app_key",
        function(value) {
        },
        function() {
            ret = ret.concat(ret, [ 0x02 ])
        }
    );
    check_encode("device_address",
        function(value) {
        },
        function() {
            ret = ret.concat(ret, [ 0x03 ])
        }
    );
    check_encode("network_session_key",
        function(value) {
        },
        function() {
            ret = ret.concat(ret, [ 0x04 ])
        }
    );
    check_encode("app_session_key",
        function(value) {
        },
        function() {
            ret = ret.concat(ret, [ 0x05 ])
        }
    );
    check_encode("loramac_join_mode",
        function(value) {
            var converted = [0x10 | 0x80,
                ((value.loramac_otaa & 0x1) << 7),
                0x00 ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x10 ])
        }
    );
    check_encode("loramac_opts",
        function(value) {
            var converted = [0x11 | 0x80,
                ((value.loramac_confirm_mode & 0xf) << 4),
                ((value.loramac_networks & 0x1) << 0) | 
                ((value.loramac_duty_cycle & 0x1) << 2) | 
                ((value.loramac_adr & 0x1) << 3) ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x11 ])
        }
    );
    check_encode("loramac_dr_tx_power",
        function(value) {
            var converted = [0x12 | 0x80,
                ((value.loramac_dr_number & 0xf) << 0),
                ((value.loramac_tx_power & 0xf) << 0) ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x12 ])
        }
    );
    check_encode("loramac_rx2",
        function(value) {
            var converted = [0x13 | 0x80,
                (value.loramac_rx2_frequency >> 24) & 0xff,(value.loramac_rx2_frequency >> 16) & 0xff, (value.loramac_rx2_frequency >> 8) & 0xff, value.loramac_rx2_frequency & 0xff,
                value.loramac_rx2_dr & 0xff ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x13 ])
        }
    );
    check_encode("loramac_net_id_msb",
        function(value) {
            var converted = [0x19 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x19 ])
        }
    );
    check_encode("loramac_net_id_lsb",
        function(value) {
            var converted = [0x1A | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x1A ])
        }
    );
    check_encode("tick_seconds",
        function(value) {
            var converted = [0x20 | 0x80,
                (value >> 24) & 0xff,(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x20 ])
        }
    );
    check_encode("tick_battery",
        function(value) {
            var converted = [0x21 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x21 ])
        }
    );
    check_encode("tick_temperature",
        function(value) {
            var converted = [0x22 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x22 ])
        }
    );
    check_encode("tick_relative_humidity",
        function(value) {
            var converted = [0x23 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x23 ])
        }
    );
    check_encode("tick_light",
        function(value) {
            var converted = [0x24 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x24 ])
        }
    );
    check_encode("tick_input1",
        function(value) {
            var converted = [0x25 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x25 ])
        }
    );
    check_encode("tick_input2",
        function(value) {
            var converted = [0x26 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x26 ])
        }
    );
    check_encode("tick_input5",
        function(value) {
            var converted = [0x27 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x27 ])
        }
    );
    check_encode("tick_acceleration",
        function(value) {
            var converted = [0x28 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x28 ])
        }
    );
    check_encode("tick_mcu_temp",
        function(value) {
            var converted = [0x29 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x29 ])
        }
    );
    check_encode("temperature_relative_humidity_idle",
        function(value) {
            var converted = [0x30 | 0x80,
                (value >> 24) & 0xff,(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x30 ])
        }
    );
    check_encode("temperature_relative_humidity_active",
        function(value) {
            var converted = [0x31 | 0x80,
                (value >> 24) & 0xff,(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x31 ])
        }
    );
    check_encode("amb_temp_threshold",
        function(value) {
            var converted = [0x32 | 0x80,
                value.temperature_high_threshold & 0xff,
                value.temperature_low_threshold & 0xff ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x32 ])
        }
    );
    check_encode("temperature_threshold_enable",
        function(value) {
            var converted = [0x33 | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x33 ])
        }
    );
    check_encode("amb_rh_threshold",
        function(value) {
            var converted = [0x34 | 0x80,
                value.relative_humidity_high_threshold & 0xff,
                value.relative_humidity_low_threshold & 0xff ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x34 ])
        }
    );
    check_encode("relative_humidity_threshold_enable",
        function(value) {
            var converted = [0x35 | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x35 ])
        }
    );
    check_encode("input12_sample_period_idle",
        function(value) {
            var converted = [0x36 | 0x80,
                (value >> 24) & 0xff,(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x36 ])
        }
    );
    check_encode("input12_sample_period_active",
        function(value) {
            var converted = [0x37 | 0x80,
                (value >> 24) & 0xff,(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x37 ])
        }
    );
    check_encode("input1_threshold",
        function(value) {
            var converted = [0x38 | 0x80,
                (value.input1_frequency_high_threshold >> 8) & 0xff, value.input1_frequency_high_threshold & 0xff,
                (value.input1_frequency_low_threshold >> 8) & 0xff, value.input1_frequency_low_threshold & 0xff ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x38 ])
        }
    );
    check_encode("input1_threshold_enable",
        function(value) {
            var converted = [0x39 | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x39 ])
        }
    );
    check_encode("input2_threshold",
        function(value) {
            var converted = [0x3A | 0x80,
                (value.input2_voltage_high_threshold >> 8) & 0xff, value.input2_voltage_high_threshold & 0xff,
                (value.input2_voltage_low_threshold >> 8) & 0xff, value.input2_voltage_low_threshold & 0xff ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x3A ])
        }
    );
    check_encode("input2_threshold_enable",
        function(value) {
            var converted = [0x3B | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x3B ])
        }
    );
    check_encode("input5_sample_period_idle",
        function(value) {
            var converted = [0x3C | 0x80,
                (value >> 24) & 0xff,(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x3C ])
        }
    );
    check_encode("input5_sample_period_active",
        function(value) {
            var converted = [0x3D | 0x80,
                (value >> 24) & 0xff,(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x3D ])
        }
    );
    check_encode("input5_threshold",
        function(value) {
            var converted = [0x3E | 0x80,
                (value.input5_frequency_high_threshold >> 8) & 0xff, value.input5_frequency_high_threshold & 0xff,
                (value.input5_frequency_low_threshold >> 8) & 0xff, value.input5_frequency_low_threshold & 0xff ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x3E ])
        }
    );
    check_encode("input5_threshold_enable",
        function(value) {
            var converted = [0x3F | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x3F ])
        }
    );
    check_encode("mcu_temperature_sample_period_idle",
        function(value) {
            var converted = [0x40 | 0x80,
                (value >> 24) & 0xff,(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x40 ])
        }
    );
    check_encode("mcu_temperature_sample_period_active",
        function(value) {
            var converted = [0x41 | 0x80,
                (value >> 24) & 0xff,(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x41 ])
        }
    );
    check_encode("mcu_temp_threshold",
        function(value) {
            var converted = [0x42 | 0x80,
                value.mcu_temperature_high_threshold & 0xff,
                value.mcu_temperature_low_threshold & 0xff ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x42 ])
        }
    );
    check_encode("mcu_temp_threshold_enable",
        function(value) {
            var converted = [0x43 | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x43 ])
        }
    );
    check_encode("light_interrupt_enabled",
        function(value) {
            var converted = [0x48 | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x48 ])
        }
    );
    check_encode("light_intencity_high_threshold",
        function(value) {
            var converted = [0x49 | 0x80,
                (value >> 24) & 0xff,(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x49 ])
        }
    );
    check_encode("light_intencity_low_threshold",
        function(value) {
            var converted = [0x4A | 0x80,
                (value >> 24) & 0xff,(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x4A ])
        }
    );
    check_encode("light_threshold_timer",
        function(value) {
            var converted = [0x4B | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x4B ])
        }
    );
    check_encode("light_sample_period_active",
        function(value) {
            var converted = [0x4C | 0x80,
                (value >> 24) & 0xff,(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x4C ])
        }
    );
    check_encode("als_values_tx",
        function(value) {
            var converted = [0x4D | 0x80,
                ((value.light_alarm & 0x1) << 0) | 
                ((value.light_intensity & 0x1) << 0) ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x4D ])
        }
    );
    check_encode("accel_mode",
        function(value) {
            var converted = [0x50 | 0x80,
                ((value.acceleration_impact_threshold_enable & 0x1) << 0) | 
                ((value.acceleration_sensor_enable & 0x1) << 7) ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x50 ])
        }
    );
    check_encode("acceleration_measurement_range",
        function(value) {
            var converted = [0x51 | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x51 ])
        }
    );
    check_encode("acceleration_sample_rate",
        function(value) {
            var converted = [0x52 | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x52 ])
        }
    );
    check_encode("acceleration_impact_threshold",
        function(value) {
            var converted = [0x53 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x53 ])
        }
    );
    check_encode("acceleration_impact_debounce_time",
        function(value) {
            var converted = [0x54 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x54 ])
        }
    );
    check_encode("accel_values_tx",
        function(value) {
            var converted = [0x55 | 0x80,
                ((value.acceleration_report_alarm & 0x1) << 0) | 
                ((value.acceleration_report_magnitude & 0x1) << 1) | 
                ((value.acceleration_report_full_precision & 0x1) << 2) ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x55 ])
        }
    );
    check_encode("write_to_flash",
        function(value) {
            var converted = [0x70 | 0x80,
                ((value.app_configuration & 0x1) << 5) | 
                ((value.lora_configuration & 0x1) << 6),
                ((value.restart_sensor & 0x1) << 0) ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x70 ])
        }
    );
    check_encode("firmware_version",
        function(value) {
        },
        function() {
            ret = ret.concat(ret, [ 0x71 ])
        }
    );
    check_encode("firmware_version",
        function(value) {
        },
        function() {
            ret = ret.concat(ret, [ 0x71 ])
        }
    );
    check_encode("firmware_version",
        function(value) {
        },
        function() {
            ret = ret.concat(ret, [ 0x71 ])
        }
    );
    check_encode("firmware_version",
        function(value) {
        },
        function() {
            ret = ret.concat(ret, [ 0x71 ])
        }
    );
    check_encode("firmware_version",
        function(value) {
        },
        function() {
            ret = ret.concat(ret, [ 0x71 ])
        }
    );
    check_encode("firmware_version",
        function(value) {
        },
        function() {
            ret = ret.concat(ret, [ 0x71 ])
        }
    );
    check_encode("firmware_version",
        function(value) {
        },
        function() {
            ret = ret.concat(ret, [ 0x71 ])
        }
    );
    check_encode("configuration_factory_reset",
        function(value) {
            var converted = [0x72 | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x72 ])
        }
    );
}

    function check_encode(prop_name, do_write, do_read)
    {
        if (data.hasOwnProperty(prop_name)) {
            var obj = data[prop_name];
            if (obj.hasOwnProperty("write")) {
                var value = obj.write;
                do_write(value);
            }

            if (obj.hasOwnProperty("read") && obj.read === true) {
                do_read();
            }
        }
    }
    return ret;
}


