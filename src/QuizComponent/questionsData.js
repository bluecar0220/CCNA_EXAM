const questions = [
    {
      question: "What term matches this definition? A suite of protocols used for reliable data transmission.",
      options: ["Subnet Mask", "DHCP", "TCP/IP", "Firewall"],
      answer: "TCP/IP"
    },
    {
      question: "What term matches this definition? A unique address assigned to each device on the network.",
      options: ["Switch", "IP Address", "Port", "MAC Address"],
      answer: "IP Address"
    },
    {
      question: "What term matches this definition? A device that connects devices within a local area network (LAN).",
      options: ["Switch", "LAN", "Packet", "VLAN"],
      answer: "Switch"
    },
    {
      question: "What term matches this definition? A device or software used to protect the network.",
      options: ["DNS", "TCP/IP", "Ping", "Firewall"],
      answer: "Firewall"
    },
    {
      question: "What term matches this definition? A suite of protocols used for reliable data transmission.",
      options: ["TCP/IP", "Ping", "Packet", "DNS"],
      answer: "TCP/IP"
    },
    {
      question: "What term matches this definition? A device that connects devices within a local area network (LAN).",
      options: ["DHCP", "Switch", "Subnet Mask", "TCP/IP"],
      answer: "Switch"
    },
    {
      question: "What term matches this definition? The unit of data transmitted across the network.",
      options: ["Packet", "Router", "VLAN", "Port"],
      answer: "Packet"
    },
    {
      question: "What term matches this definition? A tool used to test connectivity between two devices.",
      options: ["IP Address", "VLAN", "Ping", "Firewall"],
      answer: "Ping"
    },
    {
      question: "What term matches this definition? A unique hardware address assigned to each network interface card.",
      options: ["Port", "IP Address", "MAC Address", "VLAN"],
      answer: "MAC Address"
    },
    {
      question: "What term matches this definition? A network that covers a small geographic area.",
      options: ["LAN", "Firewall", "DHCP", "Subnet Mask"],
      answer: "LAN"
    },
    {
      question: "What term matches this definition? A unique address assigned to each device on the network.",
      options: ["MAC Address", "DHCP", "IP Address", "Router"],
      answer: "IP Address"
    },
    {
      question: "What term matches this definition? A technique to translate private IP addresses to public IP addresses.",
      options: ["NAT", "DHCP", "Firewall", "VLAN"],
      answer: "NAT"
    },
    {
      question: "What term matches this definition? The unit of data transmitted across the network.",
      options: ["TCP/IP", "Subnet Mask", "Packet", "Router"],
      answer: "Packet"
    },
    {
      question: "What term matches this definition? A tool used to test connectivity between two devices.",
      options: ["Firewall", "Ping", "Subnet Mask", "NAT"],
      answer: "Ping"
    },
    {
      question: "What term matches this definition? A device used to route data between different networks.",
      options: ["Packet", "Router", "Port", "Subnet Mask"],
      answer: "Router"
    },
    {
      question: "What term matches this definition? A unique address assigned to each device on the network.",
      options: ["Subnet Mask", "Router", "IP Address", "NAT"],
      answer: "IP Address"
    },
    {
      question: "What term matches this definition? A tool used to test connectivity between two devices.",
      options: ["MAC Address", "Firewall", "TCP/IP", "Ping"],
      answer: "Ping"
    },
    {
      question: "What term matches this definition? A device that connects devices within a local area network (LAN).",
      options: ["DHCP", "TCP/IP", "Switch", "Ping"],
      answer: "Switch"
    },
    {
      question: "What term matches this definition? A technique to translate private IP addresses to public IP addresses.",
      options: ["VLAN", "DHCP", "LAN", "NAT"],
      answer: "NAT"
    },
    {
      question: "What term matches this definition? Dividing a network into separate virtual networks.",
      options: ["Subnet Mask", "Switch", "VLAN", "Packet"],
      answer: "VLAN"
    },
    {
      question: "What term matches this definition? A suite of protocols used for reliable data transmission.",
      options: ["TCP/IP", "DNS", "Firewall", "Packet"],
      answer: "TCP/IP"
    },
    {
      question: "What term matches this definition? The unit of data transmitted across the network.",
      options: ["NAT", "Packet", "DHCP", "IP Address"],
      answer: "Packet"
    },
    {
      question: "What term matches this definition? A device used to route data between different networks.",
      options: ["VLAN", "Packet", "Router", "IP Address"],
      answer: "Router"
    },
    {
      question: "What term matches this definition? Dividing a network into separate virtual networks.",
      options: ["VLAN", "Firewall", "MAC Address", "NAT"],
      answer: "VLAN"
    },
    {
      question: "What term matches this definition? A specific endpoint used to route data between applications.",
      options: ["DHCP", "Packet", "Port", "MAC Address"],
      answer: "Port"
    },
    {
      question: "What term matches this definition? A unique address assigned to each device on the network.",
      options: ["Router", "Port", "Switch", "IP Address"],
      answer: "IP Address"
    },
    {
      question: "What term matches this definition? The unit of data transmitted across the network.",
      options: ["LAN", "Packet", "Switch", "TCP/IP"],
      answer: "Packet"
    },
    {
      question: "What term matches this definition? A specific endpoint used to route data between applications.",
      options: ["Packet", "Port", "DHCP", "MAC Address"],
      answer: "Port"
    },
    {
      question: "What term matches this definition? A suite of protocols used for reliable data transmission.",
      options: ["TCP/IP", "Port", "DNS", "NAT"],
      answer: "TCP/IP"
    },
    {
      question: "What term matches this definition? A device that connects devices within a local area network (LAN).",
      options: ["Router", "NAT", "VLAN", "Switch"],
      answer: "Switch"
    },
    {
      question: "What term matches this definition? A unique address assigned to each device on the network.",
      options: ["Router", "IP Address", "DNS", "NAT"],
      answer: "IP Address"
    },
    {
      question: "What term matches this definition? A tool used to test connectivity between two devices.",
      options: ["IP Address", "Ping", "VLAN", "LAN"],
      answer: "Ping"
    },
    {
      question: "What term matches this definition? A technique to translate private IP addresses to public IP addresses.",
      options: ["DNS", "Subnet Mask", "Router", "NAT"],
      answer: "NAT"
    },
    {
      question: "What term matches this definition? Used to define which part of the IP address refers to the network.",
      options: ["DHCP", "Subnet Mask", "Router", "NAT"],
      answer: "Subnet Mask"
    },
    {
      question: "What term matches this definition? A unique address assigned to each device on the network.",
      options: ["Switch", "MAC Address", "Ping", "IP Address"],
      answer: "IP Address"
    },
    {
      question: "What term matches this definition? A suite of protocols used for reliable data transmission.",
      options: ["Firewall", "TCP/IP", "DNS", "Ping"],
      answer: "TCP/IP"
    },
    {
      question: "What term matches this definition? A service used to translate domain names into IP addresses.",
      options: ["DNS", "TCP/IP", "Ping", "VLAN"],
      answer: "DNS"
    },
    {
      question: "What term matches this definition? A service used to translate domain names into IP addresses.",
      options: ["VLAN", "DHCP", "Firewall", "DNS"],
      answer: "DNS"
    },
    {
      question: "What term matches this definition? A unique address assigned to each device on the network.",
      options: ["Port", "DHCP", "Router", "IP Address"],
      answer: "IP Address"
    },
    {
      question: "What term matches this definition? A device used to route data between different networks.",
      options: ["Firewall", "Subnet Mask", "Router", "VLAN"],
      answer: "Router"
    },
    {
      question: "What term matches this definition? Used to define which part of the IP address refers to the network.",
      options: ["Router", "VLAN", "Subnet Mask", "Switch"],
      answer: "Subnet Mask"
    },
    {
      question: "What term matches this definition? A unique address assigned to each device on the network.",
      options: ["IP Address", "Firewall", "VLAN", "Switch"],
      answer: "IP Address"
    },
    {
      question: "What term matches this definition? A network that covers a small geographic area.",
      options: ["DHCP", "LAN", "Subnet Mask", "Firewall"],
      answer: "LAN"
    },
    {
      question: "What term matches this definition? A specific endpoint used to route data between applications.",
      options: ["MAC Address", "Port", "LAN", "Subnet Mask"],
      answer: "Port"
    },
    {
      question: "What term matches this definition? A protocol that allows devices to automatically obtain an IP address.",
      options: ["LAN", "DHCP", "Router", "Subnet Mask"],
      answer: "DHCP"
    },
    {
      question: "What term matches this definition? A device or software used to protect the network.",
      options: ["DNS", "Switch", "Firewall", "VLAN"],
      answer: "Firewall"
    },
    {
      question: "What term matches this definition? A technique to translate private IP addresses to public IP addresses.",
      options: ["NAT", "VLAN", "Ping", "Firewall"],
      answer: "NAT"
    },
    {
      question: "What term matches this definition? A technique to translate private IP addresses to public IP addresses.",
      options: ["Packet", "NAT", "Router", "Switch"],
      answer: "NAT"
    },
    {
      question: "What term matches this definition? A unique hardware address assigned to each network interface card.",
      options: ["MAC Address", "VLAN", "LAN", "Port"],
      answer: "MAC Address"
    },
    {
      question: "What term matches this definition? A device that connects devices within a local area network (LAN).",
      options: ["Router", "DNS", "Subnet Mask", "Switch"],
      answer: "Switch"
    }
  ];
  
  export default questions;