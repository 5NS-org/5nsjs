import { ethers } from 'ethers'

const defaultAddress = '0xAEfF4f4d8e2cB51854BEa2244B3C5Fb36b41C7fC'

const ABI = [
  'event ABIChanged(bytes32 indexed node, uint256 indexed contentType)',
  'event AddrChanged(bytes32 indexed node, address a)',
  'event AddressChanged(bytes32 indexed node, uint256 coinType, bytes newAddress)',
  'event ApprovalForAll(address indexed owner, address indexed operator, bool approved)',
  'event ContenthashChanged(bytes32 indexed node, bytes hash)',
  'event DNSRecordChanged(bytes32 indexed node, bytes name, uint16 resource, bytes record)',
  'event DNSRecordDeleted(bytes32 indexed node, bytes name, uint16 resource)',
  'event DNSZoneCleared(bytes32 indexed node)',
  'event DNSZonehashChanged(bytes32 indexed node, bytes lastzonehash, bytes zonehash)',
  'event InterfaceChanged(bytes32 indexed node, bytes4 indexed interfaceID, address implementer)',
  'event NameChanged(bytes32 indexed node, string name)',
  'event PubkeyChanged(bytes32 indexed node, bytes32 x, bytes32 y)',
  'event TextChanged(bytes32 indexed node, string indexed indexedKey, string key)',
  'function ABI(bytes32 node, uint256 contentTypes) view returns (uint256, bytes)',
  'function addr(bytes32 node) view returns (address)',
  'function addr(bytes32 node, uint256 coinType) view returns (bytes)',
  'function clearDNSZone(bytes32 node)',
  'function contenthash(bytes32 node) view returns (bytes)',
  'function dnsRecord(bytes32 node, bytes32 name, uint16 resource) view returns (bytes)',
  'function hasDNSRecords(bytes32 node, bytes32 name) view returns (bool)',
  'function interfaceImplementer(bytes32 node, bytes4 interfaceID) view returns (address)',
  'function isApprovedForAll(address account, address operator) view returns (bool)',
  'function multicall(bytes[] data) returns (bytes[] results)',
  'function name(bytes32 node) view returns (string)',
  'function pubkey(bytes32 node) view returns (bytes32 x, bytes32 y)',
  'function setABI(bytes32 node, uint256 contentType, bytes data)',
  'function setAddr(bytes32 node, uint256 coinType, bytes a)',
  'function setAddr(bytes32 node, address a)',
  'function setApprovalForAll(address operator, bool approved)',
  'function setContenthash(bytes32 node, bytes hash)',
  'function setDNSRecords(bytes32 node, bytes data)',
  'function setInterface(bytes32 node, bytes4 interfaceID, address implementer)',
  'function setName(bytes32 node, string newName)',
  'function setPubkey(bytes32 node, bytes32 x, bytes32 y)',
  'function setText(bytes32 node, string key, string value)',
  'function setZonehash(bytes32 node, bytes hash)',
  'function supportsInterface(bytes4 interfaceID) pure returns (bool)',
  'function text(bytes32 node, string key) view returns (string)',
  'function zonehash(bytes32 node) view returns (bytes)',
]

export default (provider: ethers.providers.JsonRpcProvider, address?: string) =>
  new ethers.Contract(address || defaultAddress, ABI, provider)