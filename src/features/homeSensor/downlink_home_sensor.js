export default function encode_data(data) {
    var ret = [];

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
    check_encode("loramac_otaa",
        function(value) {
            var converted = [0x10 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x10 ])
        }
    );
    check_encode("loramac_opts",
        function(value) {
            var converted = [0x11 | 0x80,
                ((value.loramac_confirm_mode & 0x1) << 0) |
                ((value.loramac_networks & 0x1) << 1) |
                ((value.loramac_duty_cycle & 0x1) << 2) |
                ((value.loramac_adr & 0x1) << 3),
                0x00 ];
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
    check_encode("tick_digital_input",
        function(value) {
            var converted = [0x24 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x24 ])
        }
    );
    check_encode("tick_light",
        function(value) {
            var converted = [0x25 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x25 ])
        }
    );
    check_encode("tick_acceleration",
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
    check_encode("tick_pir",
        function(value) {
            var converted = [0x28 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x28 ])
        }
    );
    check_encode("reed_switch_mode",
        function(value) {
            var converted = [0x2A | 0x80,
                ((value.reed_switch_rising_edge & 0x1) << 0) |
                ((value.reed_switch_falling_edge & 0x1) << 1) ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x2A ])
        }
    );
    check_encode("reed_switch_count_threshold",
        function(value) {
            var converted = [0x2B | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x2B ])
        }
    );
    check_encode("reed_switch_value_to_tx",
        function(value) {
            var converted = [0x2C | 0x80,
                ((value.reed_switch_report_state & 0x1) << 0) |
                ((value.reed_switch_report_count & 0x1) << 1) ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x2C ])
        }
    );
    check_encode("external_connector_mode",
        function(value) {
            var converted = [0x2D | 0x80,
                ((value.external_connector_rising_edge & 0x1) << 0) |
                ((value.external_connector_falling_edge & 0x1) << 1) |
                ((value.external_connector_functionality & 0x1) << 7) ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x2D ])
        }
    );
    check_encode("external_connector_count_threshold",
        function(value) {
            var converted = [0x2E | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x2E ])
        }
    );
    check_encode("external_connector_values_to_tx",
        function(value) {
            var converted = [0x2F | 0x80,
                ((value.external_connector_report_state & 0x1) << 0) |
                ((value.external_connector_report_count & 0x1) << 1) ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x2F ])
        }
    );
    check_encode("accelerometer_break_in_threshold",
        function(value) {
            var converted = [0x30 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x30 ])
        }
    );
    check_encode("accelerometer_impact_threshold",
        function(value) {
            var converted = [0x31 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x31 ])
        }
    );
    check_encode("accelerometer_values_to_transmit",
        function(value) {
            var converted = [0x32 | 0x80,
                ((value.accelerometer_report_alarm & 0x1) << 0) |
                ((value.accelerometer_report_magnitude & 0x1) << 1) |
                ((value.accelerometer_report_full_precision & 0x1) << 2) ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x32 ])
        }
    );
    check_encode("accelerometer_impact_grace_period",
        function(value) {
            var converted = [0x33 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x33 ])
        }
    );
    check_encode("accelerometer_mode",
        function(value) {
            var converted = [0x34 | 0x80,
                ((value.accelerometer_break_in_threshold_enable & 0x1) << 0) |
                ((value.accelerometer_impact_threshold_enable & 0x1) << 1) |
                ((value.accelerometer_enable & 0x1) << 7) ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x34 ])
        }
    );
    check_encode("accelerometer_sample_rate",
        function(value) {
            var converted = [0x35 | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x35 ])
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
    check_encode("temp_thresholds",
        function(value) {
            var converted = [0x3B | 0x80,
                value.temperature_low_threshold & 0xff,
                value.temperature_high_threshold & 0xff ];
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
    check_encode("rh_thresholds",
        function(value) {
            var converted = [0x3D | 0x80,
                value.relative_humidity_low_threshold & 0xff,
                value.relative_humidity_high_threshold & 0xff ];
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
                value.mcu_temparature_low_threshold & 0xff ];
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
    check_encode("light_sample_period",
        function(value) {
            var converted = [0x47 | 0x80,
                (value >> 24) & 0xff,(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x47 ])
        }
    );
    check_encode("light_threshold",
        function(value) {
            var converted = [0x48 | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x48 ])
        }
    );
    check_encode("pir_grace_period",
        function(value) {
            var converted = [0x50 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x50 ])
        }
    );
    check_encode("pir_threshold",
        function(value) {
            var converted = [0x51 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x51 ])
        }
    );
    check_encode("pir_threshold_period",
        function(value) {
            var converted = [0x52 | 0x80,
                (value >> 8) & 0xff, value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x52 ])
        }
    );
    check_encode("pir_mode",
        function(value) {
            var converted = [0x53 | 0x80,
                ((value.pir_motion_state & 0x1) << 0) |
                ((value.pir_motion_count & 0x1) << 1) |
                ((value.pir_event_enable & 0x1) << 6) |
                ((value.pir_sensor_enable & 0x1) << 7) ];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x53 ])
        }
    );
    check_encode("moisture_sample_period",
        function(value) {
            var converted = [0x5A | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x5A ])
        }
    );
    check_encode("moisture_threshold",
        function(value) {
            var converted = [0x5B | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x5B ])
        }
    );
    check_encode("moisture_enable",
        function(value) {
            var converted = [0x5C | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x5C ])
        }
    );
    check_encode("moisture_dry",
        function(value) {
            var converted = [0x5D | 0x80,
                value & 0xff];
            ret = ret.concat(converted);
        },
        function() {
            ret = ret.concat([ 0x5D ])
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

    return ArrayToBase64(ret);
}

function ArrayToBase64(arrayBuffer) {
    let base64 = '';
    const encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

    const bytes = new Uint8Array(arrayBuffer);
    const byteLength = bytes.byteLength;
    const byteRemainder = byteLength % 3;
    const mainLength = byteLength - byteRemainder;

    let a, b, c, d;
    let chunk;

    // Main loop deals with bytes in chunks of 3
    for (let i = 0; i < mainLength; i = i + 3) {
        // Combine the three bytes into a single integer
        chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];

        // Use bitmasks to extract 6-bit segments from the triplet
        a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
        b = (chunk & 258048)   >> 12; // 258048   = (2^6 - 1) << 12
        c = (chunk & 4032)     >>  6; // 4032     = (2^6 - 1) << 6
        d = chunk & 63;               // 63       = 2^6 - 1

        // Convert the raw binary segments to the appropriate ASCII encoding
        base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
    }

    // Deal with the remaining bytes and padding
    if (byteRemainder === 1) {
        chunk = bytes[mainLength];

        a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2

        // Set the 4 least significant bits to zero
        b = (chunk & 3)   << 4; // 3   = 2^2 - 1

        base64 += encodings[a] + encodings[b] + '==';
    } else if (byteRemainder === 2) {
        chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];

        a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
        b = (chunk & 1008)  >>  4; // 1008  = (2^6 - 1) << 4

        // Set the 2 least significant bits to zero
        c = (chunk & 15)    <<  2; // 15    = 2^4 - 1

        base64 += encodings[a] + encodings[b] + encodings[c] + '=';
    }

    return base64;
}




