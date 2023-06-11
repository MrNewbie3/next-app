"use client";

import React, { useEffect, useState } from "react";
import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink, Image } from "@react-pdf/renderer";

const playerData = {
  name: "John Doe",
  picture: "https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg",
  position: "Forward",
  verificationStatus: "Verified",
  number: 10,
};

// Define your table styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: "20px",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  clubLogo: {
    width: "80px",
    height: "80px",
    marginRight: "10px",
  },
  clubDetails: {
    flex: 1,
    marginLeft: "10px",
  },
  clubName: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  clubInfo: {
    fontSize: "12px",
  },
  tableContainer: {
    marginTop: "20px",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: "1px",
    borderBottomColor: "#000000",
    borderBottomStyle: "solid",
    alignItems: "center",
  },
  tableCell: {
    flex: 1,
    padding: "5px",
    borderRightWidth: "1px",
    borderRightColor: "#000000",
    borderRightStyle: "solid",
  },
  tableCellText: {
    fontSize: "12px",
  },
  playerName: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  playerPicture: {
    width: "60px",
    height: "60px",
    marginBottom: "5px",
  },
  playerInfo: {
    fontSize: "12px",
  },
});
function MyDocument(params: any) {
  const { player, team } = params.data.data;

  return (
    <Document subject="club_data">
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src={team.club_image || playerData.picture} style={styles.clubLogo} />
          <View style={styles.clubDetails}>
            <Text style={styles.clubName}>{team.club_name}</Text>
            <Text style={styles.clubInfo}>
              Nickname: {team.club_nickname} | Origin: {team.club_origin} | Established: {team.club_established}
            </Text>
          </View>
        </View>
        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>No.</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.tableCellText}>Player Name</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.tableCellText}>Player Picture</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.tableCellText}>Position</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.tableCellText}>Verification Status</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.tableCellText}>Number of Players</Text>
            </View>
          </View>
          {player.map((player: any, index: number) => (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCell}>
                <Text>{index + 1}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.playerName}>{player.fullname}</Text>
              </View>
              <View style={styles.tableCell}>
                <Image src={player.photo_player || playerData.picture} style={styles.playerPicture} />
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.playerInfo}>{player.position}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.playerInfo}>{player.is_verified ? "Terverifikasi" : "Belum Diverifikasi"}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.playerInfo}>{player.number_of_player}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

const PDFView = (data: Object) => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <PDFViewer className="w-full h-screen">
      <MyDocument data={data} />
    </PDFViewer>
  );
};

export default PDFView;
// @ts-ignore
