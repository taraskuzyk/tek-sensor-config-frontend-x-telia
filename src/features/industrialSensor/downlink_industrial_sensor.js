function encode_data(port, data) {
    var ret = [];

if (port === 10) {
    check_encode("output_1",
        function(value) {
            var converted = [0x01, 0x01,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x01, 0x01 ])
        }
    );
    check_encode("output_2",
        function(value) {
            var converted = [0x02, 0x01,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x02, 0x01 ])
        }
    );
}
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
                ((value.loramac_class & 0xf) << 4),
                ((value.loramac_confirmed_uplink & 0x1) << 0) | 
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
    check_encode("tick_digital_input",
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
    check_encode("tick_humidity",
        function(value) {
            var converted = [0x23 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x23 ])
        }
    );
    check_encode("tick_input1",
        function(value) {
            var converted = [0x24 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x24 ])
        }
    );
    check_encode("tick_input2",
        function(value) {
            var converted = [0x25 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x25 ])
        }
    );
    check_encode("tick_input3",
        function(value) {
            var converted = [0x26 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x26 ])
        }
    );
    check_encode("tick_mcu_temperature",
        function(value) {
            var converted = [0x27 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x27 ])
        }
    );
    check_encode("tick_output1",
        function(value) {
            var converted = [0x28 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x28 ])
        }
    );
    check_encode("tick_output2",
        function(value) {
            var converted = [0x29 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x29 ])
        }
    );
    check_encode("input1_mode",
        function(value) {
            var converted = [0x2A | 0x80,
                ((value.input1_rising_edge & 0x1) << 0) | 
                ((value.input1_falling_edge & 0x1) << 1) ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x2A ])
        }
    );
    check_encode("input1_count_threshold",
        function(value) {
            var converted = [0x2B | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x2B ])
        }
    );
    check_encode("input1_value_tx",
        function(value) {
            var converted = [0x2C | 0x80,
                ((value.input1_report_state & 0x1) << 0) | 
                ((value.input1_report_counter_value & 0x1) << 1) ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x2C ])
        }
    );
    check_encode("input23_sample_period_idle",
        function(value) {
            var converted = [0x30 | 0x80,
                (value >> 24) & 0xff,(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x30 ])
        }
    );
    check_encode("input23_sample_period_active",
        function(value) {
            var converted = [0x31 | 0x80,
                (value >> 24) & 0xff,(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x31 ])
        }
    );
    check_encode("input2_threshold",
        function(value) {
            var converted = [0x32 | 0x80,
                value.input2_current_high_threshold & 0xff,
                value.input2_current_low_threshold & 0xff ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x32 ])
        }
    );
    check_encode("input3_threshold",
        function(value) {
            var converted = [0x33 | 0x80,
                value.input3_current_high_threshold & 0xff,
                value.input3_current_low_threshold & 0xff ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x33 ])
        }
    );
    check_encode("input23_threshold_enable",
        function(value) {
            var converted = [0x34 | 0x80,
                ((value.input2_threshold_enable & 0x1) << 0) | 
                ((value.input3_threshold_enable & 0x1) << 4) ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x34 ])
        }
    );
    check_encode("temperature_relative_humidity_sample_period_idle",
        function(value) {
            var converted = [0x39 | 0x80,
                (value >> 24) & 0xff,(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x39 ])
        }
    );
    check_encode("temperature_relative_humidity_sample_period_active",
        function(value) {
            var converted = [0x3A | 0x80,
                (value >> 24) & 0xff,(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x3A ])
        }
    );
    check_encode("temp_threshold",
        function(value) {
            var converted = [0x3B | 0x80,
                value.temperature_high_threshold & 0xff,
                value.temperature_low_threshold & 0xff ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x3B ])
        }
    );
    check_encode("temperature_threshold_enable",
        function(value) {
            var converted = [0x3C | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x3C ])
        }
    );
    check_encode("rh_threshold",
        function(value) {
            var converted = [0x3D | 0x80,
                value.relative_humidity_high_threshold & 0xff,
                value.relative_humidity_low_threshold & 0xff ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x3D ])
        }
    );
    check_encode("relative_humidity_threshold_enable",
        function(value) {
            var converted = [0x3E | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x3E ])
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
    check_encode("mcu_temperature_threshold_enable",
        function(value) {
            var converted = [0x43 | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x43 ])
        }
    );
    check_encode("output1_control",
        function(value) {
            var converted = [0x50 | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x50 ])
        }
    );
    check_encode("output1_delay",
        function(value) {
            var converted = [0x51 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x51 ])
        }
    );
    check_encode("output2_control",
        function(value) {
            var converted = [0x52 | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x52 ])
        }
    );
    check_encode("output2_delay",
        function(value) {
            var converted = [0x53 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x53 ])
        }
    );
    check_encode("serial_interface_type",
        function(value) {
            var converted = [0x60 | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x60 ])
        }
    );
    check_encode("serial_baud_rate",
        function(value) {
            var converted = [0x61 | 0x80,
                (value >> 24) & 0xff,(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x61 ])
        }
    );
    check_encode("serial_data_bits",
        function(value) {
            var converted = [0x62 | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x62 ])
        }
    );
    check_encode("serial_parity_bits",
        function(value) {
            var converted = [0x63 | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x63 ])
        }
    );
    check_encode("serial_stop_bits",
        function(value) {
            var converted = [0x64 | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x64 ])
        }
    );
    check_encode("serial_duplex_mode",
        function(value) {
            var converted = [0x65 | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x65 ])
        }
    );
    check_encode("modbus_rtu_symbol_timeout",
        function(value) {
            var converted = [0x68 | 0x80,
                (value >> 24) & 0xff,(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x68 ])
        }
    );
    check_encode("modbus_rtu_rx_timeout",
        function(value) {
            var converted = [0x69 | 0x80,
                (value >> 24) & 0xff,(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x69 ])
        }
    );
    check_encode("modbus_rtu_polling_period",
        function(value) {
            var converted = [0x6A | 0x80,
                (value >> 24) & 0xff,(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x6A ])
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


