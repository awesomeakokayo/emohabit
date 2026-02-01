import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
    const router = useRouter();

    const menuItems = [
        { label: 'Account Settings', icon: 'settings-outline' },
        { label: 'Notifications', icon: 'notifications-outline' },
        { label: 'Privacy & Security', icon: 'shield-checkmark-outline' },
        { label: 'Help & Support', icon: 'help-circle-outline' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Profile</Text>

            <View style={styles.profileHeader}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>AH</Text>
                </View>
                <Text style={styles.name}>Alex Hunter</Text>
                <Text style={styles.email}>alex.hunter@example.com</Text>
            </View>

            <View style={styles.menu}>
                {menuItems.map((item, index) => (
                    <Pressable key={index} style={styles.menuItem}>
                        <View style={styles.menuLeft}>
                            <Ionicons name={item.icon as any} size={22} color="#aaa" />
                            <Text style={styles.menuText}>{item.label}</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#666" />
                    </Pressable>
                ))}
            </View>

            <Pressable
                style={styles.signOutButton}
                onPress={() => router.replace('/')} // Sign out to intro
            >
                <Text style={styles.signOutText}>Sign Out</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blackishOrange,
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    headerTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    profileHeader: {
        alignItems: 'center',
        marginBottom: 40,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#332a24',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        borderWidth: 2,
        borderColor: Colors.primary,
    },
    avatarText: {
        color: Colors.primary,
        fontSize: 32,
        fontWeight: 'bold',
    },
    name: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    email: {
        color: '#aaa',
        fontSize: 14,
    },
    menu: {
        backgroundColor: '#2a221d',
        borderRadius: 16,
        padding: 10,
        marginBottom: 30,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.05)',
    },
    menuLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    menuText: {
        color: 'white',
        fontSize: 16,
    },
    signOutButton: {
        backgroundColor: 'rgba(255, 60, 60, 0.1)',
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 30,
    },
    signOutText: {
        color: '#ff4444',
        fontWeight: 'bold',
        fontSize: 16,
    }
});

export default Profile;
