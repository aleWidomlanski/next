import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import type { NextPage } from 'next'
import { Layout } from '../components/layouts';
import { EntryList } from '../components/ui';
import styles from './Home.module.css'

const HomePage: NextPage = () => {
  return (
    <Layout title='Home - Jirale'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh-100px)' }} className={styles.card}>
            <CardHeader title='Pendientes' className={styles.header}/ >
            <CardContent className={styles.content}>
              <EntryList status='pending'/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh-100px)' }}>
            <CardHeader title='En progreso' />
            <CardContent>
              <EntryList status='in-progress' />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh-100px)' }}>
            <CardHeader title='Completadas' />
            <CardContent>
              <EntryList status='finished' />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage
